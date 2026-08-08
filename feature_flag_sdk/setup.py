from setuptools import setup, find_packages

setup(
    name="feature_flag_sdk",
    version="1.0.0",
    description="Python SDK for Feature Management System",
    author="Vaibhav Priyadarshi",
    packages=find_packages(),
    install_requires=[
        "requests",
        "cachetools",
        "python-dotenv",
        "starlette",
    ],
    python_requires=">=3.10",
)