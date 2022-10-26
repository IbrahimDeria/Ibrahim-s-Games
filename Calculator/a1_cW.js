function calcu(calcValue) {
  switch (calcValue) {
    case 1:
      calc.output.value += "1";
      break;
    case 2:
      calc.output.value += "2";
      break;
    case 3:
      calc.output.value += "3";
      break;
    case 4:
      calc.output.value += "4";
      break;
    case 5:
      calc.output.value += "5";
      break;
    case 6:
      calc.output.value += "6";
      break;
    case 7:
      calc.output.value += "7";
      break;
    case 8:
      calc.output.value += "8";
      break;

    case 9:
      calc.output.value += "9";
      break;
    case "-":
      calc.output.value += "-";
      break;
    case "+":
      calc.output.value += "+";
      break;
    case "*":
      calc.output.value += "*";
      break;
    case "/":
      calc.output.value += "/";
      break;
    case "ce":
      calc.output.value = "";
      break;
    default:
      calc.output.value = eval(calc.output.value);
  }
}
