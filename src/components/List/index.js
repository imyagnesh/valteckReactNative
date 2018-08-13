import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

const List = ({ data }) => {
  return (
    <React.Fragment>
      {data.map(item => (
        <View
          key={item.id}
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 10
          }}
        >
          <View
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: item.color || "#4a4a4a",
              marginRight: 12
            }}
          />
          <Text style={{ flex: 1 }}>{item.text}</Text>
          {item.value && <Text>{item.value}</Text>}
        </View>
      ))}
    </React.Fragment>
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired
};

export default List;
