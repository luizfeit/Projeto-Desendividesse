
import { Dimensions } from "react-native";

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
    screenWidth,
    chartConfig
}