/**
 * Utilities for sharing, copying, and downloading product photos
 * directly for WhatsApp inquiries without sending raw file links.
 */

/**
 * Copies an image directly to the clipboard as a PNG blob so the user
 * can simply press Ctrl+V in WhatsApp Web / Desktop to paste the real picture.
 */
export async function copyImageToClipboard(imageUrl: string): Promise<boolean> {
  if (typeof window === "undefined" || !navigator.clipboard || !navigator.clipboard.write) {
    return false;
  }

  try {
    const res = await fetch(imageUrl);
    if (!res.ok) throw new Error("Failed to fetch image");
    const blob = await res.blob();

    // The Clipboard API strictly requires image/png in most desktop browsers
    const img = new Image();
    img.crossOrigin = "anonymous";

    const objectUrl = URL.createObjectURL(blob);
    img.src = objectUrl;

    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
    });

    const canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth || img.width;
    canvas.height = img.naturalHeight || img.height;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      URL.revokeObjectURL(objectUrl);
      return false;
    }

    ctx.drawImage(img, 0, 0);
    URL.revokeObjectURL(objectUrl);

    const pngBlob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, "image/png")
    );

    if (pngBlob) {
      const clipboardItem = new ClipboardItem({ "image/png": pngBlob });
      await navigator.clipboard.write([clipboardItem]);
      return true;
    }
  } catch (error) {
    console.warn("Direct image clipboard copy failed:", error);
  }

  return false;
}


/**
 * Direct file download helper
 */
export function downloadProductImage(imageUrl: string, filename: string): void {
  if (typeof window === "undefined") return;

  const a = document.createElement("a");
  a.href = imageUrl;
  a.download = filename || "ab_collections_item.jpg";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
