import { Dimensions } from "react-native";


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
    screenWidth1,
    chartConfig1
}