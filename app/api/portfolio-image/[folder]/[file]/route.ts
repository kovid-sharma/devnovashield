import { readFile } from "node:fs/promises";
import path from "node:path";

const ALLOWED_FOLDERS = new Set(["fynX", "pettoo", "equinox"]);

const MIME_TYPES: Record<string, string> = {
    ".avif": "image/avif",
    ".gif": "image/gif",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".webp": "image/webp",
};

async function resolveFilePath(folder: string, file: string) {
    const candidatePaths = [
        path.join(process.cwd(), "assets", folder, file),
        path.join(process.cwd(), "public", "assets", folder, file),
    ];

    for (const candidate of candidatePaths) {
        try {
            await readFile(candidate);
            return candidate;
        } catch {
            continue;
        }
    }

    return null;
}

export async function GET(
    _request: Request,
    context: { params: Promise<{ folder: string; file: string }> }
) {
    const { folder, file } = await context.params;

    if (!ALLOWED_FOLDERS.has(folder) || path.basename(file) !== file) {
        return new Response("Not found", { status: 404 });
    }

    const filePath = await resolveFilePath(folder, file);
    if (!filePath) {
        return new Response("Not found", { status: 404 });
    }

    const fileBuffer = await readFile(filePath);
    const extension = path.extname(file).toLowerCase();

    return new Response(fileBuffer, {
        headers: {
            "Content-Type": MIME_TYPES[extension] ?? "application/octet-stream",
            "Cache-Control": "public, max-age=3600",
        },
    });
}
