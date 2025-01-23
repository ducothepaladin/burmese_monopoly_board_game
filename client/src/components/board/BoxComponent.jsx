import { boxGroups } from "../../assets/staticData";
import { StartBox, JailBox, GusetHouseBox, ChestBox, ChanceBox, InComeTexBox, TransportationBox, EnergyBox, CityBox } from "./Boxs";



const BoxComponents = {
  [boxGroups.START]: StartBox,
  [boxGroups.JAIL]: JailBox,
  [boxGroups.GUEST_HOUSE]: GusetHouseBox,
  [boxGroups.CHEST]: ChestBox,
  [boxGroups.CHANCE]: ChanceBox,
  [boxGroups.INCOMETEX]: InComeTexBox,
  [boxGroups.TRANSPORTATION]: TransportationBox,
  [boxGroups.ENERGY]: EnergyBox,
  [boxGroups.BROWN]: CityBox,
  [boxGroups.BROWN_2]: CityBox,
  [boxGroups.BLUE]: CityBox,
  [boxGroups.PINK]: CityBox,
  [boxGroups.YELLOW]: CityBox,
  [boxGroups.GREEN]: CityBox,
  [boxGroups.GREEN_2]: CityBox,
  [boxGroups.ORANGE]: CityBox,
};

export const RenderBoxContent = ({ group, ...props }) => {
  const BoxComponent = BoxComponents[group];
  return BoxComponent ? <BoxComponent {...props} /> : null;
};