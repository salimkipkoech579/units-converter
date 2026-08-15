# 🔄 Unit Converter (HTML, CSS & JavaScript)

A simple and interactive Unit Converter built with HTML, CSS, and JavaScript. This application allows users to convert values between different units such as Length, Weight, Temperature, and more.

## ✨ Features

- Length Conversion
- Weight Conversion
- Temperature Conversion
- Instant Results
- Responsive Design
- Easy-to-Use Interface
- No External Libraries Required

## 🚀 Technologies Used

- HTML5
- CSS3
- JavaScript

## 📁 Project Structure

```text
unit-converter/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 💻 Example HTML

```html
<!DOCTYPE html>
<html>
<head>
    <title>Unit Converter</title>
</head>
<body>
    <h1>Unit Converter</h1>

    <input type="number" id="value" placeholder="Enter value">

    <select id="conversion">
        <option value="kmToMiles">Kilometers to Miles</option>
        <option value="milesToKm">Miles to Kilometers</option>
    </select>

    <button onclick="convert()">Convert</button>

    <p id="result"></p>

    <script>
        function convert() {
            let value = parseFloat(document.getElementById("value").value);
            let conversion = document.getElementById("conversion").value;
            let result;

            if (conversion === "kmToMiles") {
                result = value * 0.621371;
            } else {
                result = value * 1.60934;
            }

            document.getElementById("result").innerText =
                "Result: " + result.toFixed(2);
        }
    </script>
</body>
</html>
```

## 📌 Usage

1. Enter a value.
2. Select the conversion type.
3. Click the **Convert** button.
4. View the converted result instantly.

## 📸 Example

```text
Input: 10 Kilometers
Output: 6.21 Miles
```

## 🔮 Future Enhancements

- Dark Mode
- Currency Converter
- More Conversion Categories
- Conversion History
- PWA Support

## 📄 License

This project is licensed under the MIT License.

## ❤️ Author

Created using HTML, CSS, and JavaScript.# units-converter
Multi-unit converter supporting length, mass, temperature, area, volume, and time conversions with a clean, user-friendly interface.
