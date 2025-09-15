function convert() {
      let temp = parseFloat(document.getElementById("temperature").value);
      let fromUnit = document.getElementById("fromUnit").value;
      let toUnit = document.getElementById("toUnit").value;
      let result;

      if (isNaN(temp)) {
        document.getElementById("result").innerText = "⚠️ Please enter a valid number!";
        return;
      }

      // Convert input to Celsius first
      let celsius;
      if (fromUnit === "C") {
        celsius = temp;
      } else if (fromUnit === "F") {
        celsius = (temp - 32) * 5/9;
      } else if (fromUnit === "K") {
        celsius = temp - 273.15;
      }

      // Convert Celsius to target unit
      if (toUnit === "C") {
        result = celsius;
      } else if (toUnit === "F") {
        result = (celsius * 9/5) + 32;
      } else if (toUnit === "K") {
        result = celsius + 273.15;
      }

      document.getElementById("result").innerText = 
        `${result.toFixed(2)} °${toUnit}`;
 }