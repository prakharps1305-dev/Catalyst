from google import genai
from google.genai import types
import os

client = genai.Client(
    vertexai=True,
    project=os.getenv("GOOGLE_CLOUD_PROJECT"),
    location=os.getenv("GOOGLE_CLOUD_LOCATION")
)

def generate(prompt:str,response_schema=None):

    config = None

    if response_schema:
        config = types.GenerateContentConfig(
        response_mime_type="application/json",
        response_schema=response_schema
        )

    response=client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt,
        config=config
        )

    if response_schema:
        return response.parsed

    return response.text