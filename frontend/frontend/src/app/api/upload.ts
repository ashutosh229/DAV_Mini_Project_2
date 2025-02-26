export async function uploadDocument(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Failed to upload document");
    }

    return await response.json(); // Expected response: { doc_id: "some_id" }
}
