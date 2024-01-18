# AI Image Generator Backend

This repository contains the backend code for an AI image generator powered by OpenAI's API. The application utilizes advanced language models to generate images based on textual descriptions provided as input.

## Getting Started

Follow these steps to set up the AI image generator backend on your local machine.

### Prerequisites

1. **OpenAI API Key**: You need to obtain an API key from OpenAI. If you don't have one, you can sign up for access on the [OpenAI website](https://beta.openai.com/signup/).

### Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/sehaj23/AI-image-generator-backend.git
    ```

2. Navigate to the project directory:

    ```bash
    cd AI-image-generator-backend
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Configuration

1. Set your OpenAI API key as an environment variable. You can do this by creating a `.env` file in the project root and adding the following line:

    ```
    OPENAI_API_KEY=your-api-key
    port =8001 (upto you.)
    ```

    Replace `your-api-key` with the actual API key you obtained from OpenAI.

## Usage

Once you have set up the environment, you can start using the AI image generator backend. The main functionality involves sending textual descriptions to the OpenAI API, which will return corresponding image outputs.

### Example
```
http://localhost:8001/image
{
    "description":"Taj Mahal"
}
```