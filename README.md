# Abstraction-of-content-using-browser-extention

## Overview
abstraction-of-content-using-browser-extention is a Chrome extension designed to analyze website content and assess its impact on mental health. The extension extracts visible text from web pages, classifies its sensitivity using a RNN model, and applies various interventions to enhance user well-being.

## Features
- **Text Analysis**: Extracts website content and classifies its sensitivity into four levels done using a RNN based model.
- **Content Filtering**: Blurs and/or rephrases sensitive text based on its classification.
- **Real-Time Intervention**: Replaces harmful content with a rephrased version or a pop-up warning.
- **Stress-Relief Tools**:
  - Has related and stress relief links 
- **Firebase Integration**: Retrieves and processes scrapped website text from Firebase.
- **User-Controlled Sidebar**: Displays analyzed text and interventions within a sidebar.
## Features of the Trained Model
- The Dataset used in it is GoEmotions and consists of following features
1. **Embedding Layer:** Converts words into dense vectors of fixed size.
2. **Recurrent Layer:** A GRU/LSTM processes the sequential text data.
3. **Dense Layer:** Fully connected layers with activation functions refine classification.
4. Thus this model provides an accuracy of 76% on training dataset and 67% (the lower accuracy is due to limited training period)
## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/dwarak726/abstraction-of-content-using-browser-extention
   ``` 
2. Create a firebase and replace the existing links with the created realtime database in the contents.js file under 
3. Open **Google Chrome** and navigate to `chrome://extensions/`.
4. Enable **Developer Mode** (toggle on the top right).
5. Click **Load Unpacked** and select the extension folder under your cloned project folder.
6. The extension will be added to Chrome.
7. Now before enableing the website run the excrtractor.py and keep it running and u can now use your website

## Usage
1. Browse the web as usual.
2. The extension will automatically send its contents to a 
3. If sensitive content is detected, it will be blurred or rephrased.
4. Click the extension icon to open the sidebar for more insights and stress-relief tools.

## Technologies Used
- **Machine Learning**: RNN-based text classification.
- **JavaScript**: Core scripting for text processing.
- **HTML & CSS**: User interface design.
- **Google Firebase**: Cloud database for scrapped website text.
## Contributors
- Golconda Dwarak
- E. Dheeraj Chandra
- N.Sumith Chandra

