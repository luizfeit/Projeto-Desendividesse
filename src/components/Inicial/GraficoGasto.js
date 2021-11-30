import { Dimensions } from "react-native";

const data1 = {
    labels: ["Débito", "Crédito", "Trânsferencia", "Saque"],
    datasets: [
      {
        data: [1,2,3,4]
      }
    ]
  };
const screenWidth1 = Dimensions.get("window").width;

const chartConfig1 = {
    backgroundGradientFrom: "#FFF",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#FFF",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(30, 41, 59, ${opacity})`,
    barPercentage: 0.5,
};

export {
    data1,
    screenWidth1,
    chartConfig1
}