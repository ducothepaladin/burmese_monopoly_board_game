import { boxGroups } from "../../assets/staticData";
import { CityBoxInfo, StartBoxInfo, JailBoxInfo, GusetHouseBoxInfo, InComeTexBoxInfo, EnergyBoxInfo, ChanceBoxInfo, ChestBoxInfo, TransportationBoxInfo } from "./BoxInfo";

const BoxInfoComponents = {
    [boxGroups.START]: StartBoxInfo,
    [boxGroups.JAIL]: JailBoxInfo,
    [boxGroups.GUEST_HOUSE]: GusetHouseBoxInfo,
    [boxGroups.CHEST]: ChestBoxInfo,
    [boxGroups.CHANCE]: ChanceBoxInfo,
    [boxGroups.INCOMETEX]: InComeTexBoxInfo,
    [boxGroups.TRANSPORTATION]: TransportationBoxInfo,
    [boxGroups.ENERGY]: EnergyBoxInfo,
    [boxGroups.BROWN]: CityBoxInfo,
    [boxGroups.BROWN_2]: CityBoxInfo,
    [boxGroups.BLUE]: CityBoxInfo,
    [boxGroups.PINK]: CityBoxInfo,
    [boxGroups.YELLOW]: CityBoxInfo,
    [boxGroups.GREEN]: CityBoxInfo,
    [boxGroups.GREEN_2]: CityBoxInfo,
    [boxGroups.ORANGE]: CityBoxInfo,
  };


export const RenderBoxInfo = ({group, info}) => {
    const BoxInfoComponent = BoxInfoComponents[group];

    return BoxInfoComponent ? <BoxInfoComponent currentBox={info} /> : null;
}


