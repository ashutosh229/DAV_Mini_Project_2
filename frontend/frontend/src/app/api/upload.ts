export async function uploadDocument(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:8080/upload", {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Failed to upload document");
    }

    return response.json(); // Expected response: { doc_id: "some-id" }
}
