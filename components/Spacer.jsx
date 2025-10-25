import { View } from "react-native";

const Spacer = ({ style, ...props }) => {
    return (
        <View style={[{ width:200, style }]}
            {...props}
        />
    );
};

export default Spacer;
