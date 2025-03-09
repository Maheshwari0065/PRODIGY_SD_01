function convertTemperature() {
  let value = parseFloat(document.getElementById("temperature").value);
  let unit = document.getElementById("unit").value;
  let result = "";
  
  if (isNaN(value)) {
      result = "Please enter a valid number.";
  } else {
      if (unit === "C") {
          let f = (value * 9/5) + 32;
          let k = value + 273.15;
          result = `${value}°C = ${f.toFixed(2)}°F = ${k.toFixed(2)}K`;
      } else if (unit === "F") {
          let c = (value - 32) * 5/9;
          let k = (value - 32) * 5/9 + 273.15;
          result = `${value}°F = ${c.toFixed(2)}°C = ${k.toFixed(2)}K`;
      } else if (unit === "K") {
          let c = value - 273.15;
          let f = (value - 273.15) * 9/5 + 32;
          result = `${value}K = ${c.toFixed(2)}°C = ${f.toFixed(2)}°F`;
      }
  }
  
  document.getElementById("result").innerText = result;
}