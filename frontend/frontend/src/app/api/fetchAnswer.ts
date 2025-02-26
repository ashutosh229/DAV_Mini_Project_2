export async function fetchAnswer(question: string, docId: string) {
    const response = await fetch("http://localhost:8000/answer", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ question, doc_id: docId }),
    });

    if (!response.ok) {
        throw new Error("Failed to fetch answer");
    }

    return await response.json(); // Expected response: { answer: "Some answer" }
}
