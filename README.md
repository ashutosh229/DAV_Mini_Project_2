# Document-Based Question Answering System

## Overview

This repository contains a document-based question answering system that can extract relevant answers from provided documents based on user queries. The system leverages natural language processing and transformers based techniques to understand documents and generate accurate responses to questions.

## Project Description

This question answering system allows users to access the information of the pre-uploaded and chunked and vectorized documents and ask questions about their content in the context of the class and subject. The system processes the documents, builds a knowledge base, and then answers questions by retrieving and synthesizing information from the uploaded documents.

## Implementation

The complete code implementation for this project is available in a Google Colab notebook:

[Access the Question Answering System Notebook](# Document-Based Question Answering System

## Overview

This repository contains a document-based question answering system that can extract relevant answers from provided documents based on user queries. The system leverages natural language processing and machine learning techniques to understand documents and generate accurate responses to questions.

## Project Description

This question answering system allows users to upload documents and ask questions about their content. The system processes the documents, builds a knowledge base, and then answers questions by retrieving and synthesizing information from the uploaded documents.

## Implementation

The complete code implementation for this project is available in a Google Colab notebook:

[Access the Question Answering System Notebook](https://colab.research.google.com/drive/1VC4zm_elBa_vck5y2Er_dWOa90hHTKBk?usp=sharing)

## Features

- Document preprocessing and text extraction
- Question understanding and analysis
- Relevant information retrieval
- Natural language answer generation
- Support for class 10 and 12 NCERT books

## How It Works

1. **Document Upload**: The developer has already uploaded the precomputed i.e. preprocessed, chunked and vectorized documents in the vector database, to get rid of the unnecessary computations during the user querying
2. **Text Processing**: The system extracts and processes text from the documents
3. **Knowledge Base Creation**: The system indexes and stores document information
4. **Question Processing**: User questions are analyzed and understood
5. **Answer Generation**: The system retrieves relevant information and generates a natural language answer

## Technologies Used

- Python
- Hugging Face Transformers
- NLTK
- Pandas
- Document processing libraries
- Embedding models 
- Open source LLMs

## Setup and Usage

To use this system:

1. Open the Google Colab notebook using the link above
2. Follow the instructions in the notebook to mount your Google Drive (needed for accessing the data files and index files)
3. Keep following the instructions, in the form of comments, in the google colab notebook to access the system
4. Test the system finally
## Examples

Here are some example questions you can ask the system:

- "What is photosynthesis?"
- "Explain the importance of trigonometry."
- "What does the document say about [specific topic]?"
- "When was the [specific event] occured?"

## Future Improvements

- Enhancing answer accuracy with more advanced models
- Supporting more data in the form of different literatures and more books
- Implementing better functionalities like multi lingual support
- Implementing the user interface
- Adding multi modality to the system

## Contact

For questions or feedback about this project, please contact:

- Email: ashutoshj@iitbhilai.ac.in
- GitHub: [Your GitHub Profile](https://github.com/ashutosh229)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---
