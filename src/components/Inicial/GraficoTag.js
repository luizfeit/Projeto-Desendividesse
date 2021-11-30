
import { Dimensions } from "react-native";

const data = {
    labels: ["Lazer", "Alime.", "Trans.", "Mer."], // optional
    data: [0.4, 0.6, 0.8, 0.1]
};
const screenWidth = Dimensions.get("window").width;

const chartConfig = {
    backgroundGradientFrom: "#FFF",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#FFF",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(245, 158, 11, ${opacity})`,
    barPercentage: 0.5,
};

export {
    data,
    screenWidth,
    chartConfig
}