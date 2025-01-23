export const renderPosition = (box) => {
    const positionObj = {
        width: `${box.w}%`,
        height: `${box.h}%`,
        position: "absolute",
        [`${box.position[0].name}`]: `${box.position[0].value}%`,
        [`${box.position[1].name}`]: `${box.position[1].value}%`,
      }
    return positionObj;
}