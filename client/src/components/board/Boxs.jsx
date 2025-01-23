export function StartBox(props) {
  const { degree, boxData } = props.boxInfo;

  return (
    <div
      style={{
        transform: `rotate(${degree}deg)`,
      }}
      className="flex justify-center items-center flex-col"
    >
      <p className="text-[15px] w-3/4 text-center">{boxData.info["burmese"]}</p>
      <h1 className="text-[20px] font-bold text-yellow-600 text-center stroke-black">{boxData.name}</h1>
    </div>
  );
}

export function JailBox(props) {

    const { degree, boxData } = props.boxInfo;

    return (
        <div
          style={{
            transform: `rotate(${degree}deg)`,
          }}
          className="flex justify-center items-center flex-col"
        >
          <h1 className="text-[20px] font-bold text-black text-center stroke-black">{boxData.name}</h1>
          <p className="text-[15px] w-3/4 text-center">{boxData.info["eng"]}</p>

        </div>
      );
}

export function GusetHouseBox(props) {

    const { degree, boxData } = props.boxInfo;

    return (
        <div
          style={{
            transform: `rotate(${degree}deg)`,
          }}
          className="flex justify-center items-center flex-col"
        >
          <h1 className="text-[12px] font-bold text-black text-center stroke-black">{boxData.name}</h1>
          <p className="text-[15px] w-3/4 text-center">{boxData.info["eng"]}</p>

        </div>
      );
}

export function ChestBox(props) {

    const { degree, boxData } = props.boxInfo;

    return (
        <div
          style={{
            transform: `rotate(${degree}deg)`,
          }}
          className="flex overflow-hidden justify-center items-center flex-col"
        >
          <h1 className="text-[15px] font-bold text-black text-center stroke-black">{boxData.name}</h1>
          <div className="text-[30px] text-blue-600"><i className="fa-solid fa-dharmachakra"></i></div>
        </div>
      );
}

export function ChanceBox(props) {

    const { degree, boxData } = props.boxInfo;

    return (
        <div
          style={{
            transform: `rotate(${degree}deg)`,
          }}
          className="flex overflow-hidden justify-center items-center flex-col"
        >
          <h1 className="text-[15px] font-bold text-black text-center stroke-black">{boxData.name}</h1>
          <div className="text-[30px] text-yellow-600"><i className="fa-solid fa-question"></i></div>
        </div>
      );
}

export function InComeTexBox(props) {

    const { degree, boxData } = props.boxInfo;

    return (
        <div
          style={{
            transform: `rotate(${degree}deg)`,
          }}
          className="flex overflow-hidden justify-center items-center flex-col"
        >
          <h1 className="text-[15px] font-bold text-black text-center stroke-black">{boxData.name}</h1>
          <p className="text-[12px] mb-1 text-center">{boxData.info["burmese"]}</p>
          <p className="text-[12px] w-20 text-center font-bold">{boxData.info["eng"]}</p>
        </div>
      );
}

export function TransportationBox(props) {

    const { degree, boxData } = props.boxInfo;

    return (
        <div
          style={{
            transform: `rotate(${degree}deg)`,
          }}
          className="flex overflow-hidden justify-center items-center flex-col"
        >
          <h1 className="text-[15px] font-bold text-black text-center stroke-black">{boxData.name}</h1>
          <p className="text-[12px] mb-1 text-center">{boxData.info["burmese"]}</p>
          <p className="text-[12px] w-20 text-center font-bold">{boxData.info["eng"]}</p>
        </div>
      );
}

export function EnergyBox(props) {

    const { degree, boxData } = props.boxInfo;

    return (
        <div
          style={{
            transform: `rotate(${degree}deg)`,
          }}
          className="flex overflow-hidden justify-center items-center flex-col"
        >
          <h1 className="text-[15px] font-bold text-black text-center stroke-black">{boxData.name}</h1>
          <p className="text-[12px] mb-1 text-center">{boxData.info["burmese"]}</p>
          <p className="text-[12px] w-20 text-center font-bold">{boxData.info["eng"]}</p>
        </div>
      );
}

export function CityBox(props) {

    const { degree, boxData } = props.boxInfo;

    return (
        <div
          style={{
            transform: `rotate(${degree}deg)`,
          }}
          className="flex overflow-hidden justify-center items-center flex-col"
        >
          <h1 className="text-[15px] font-bold text-black text-center stroke-black">{boxData.name}</h1>
          <p className="text-[12px] mb-1 text-center">{boxData.info["burmese"]}</p>
          <p className="text-[12px] w-20 text-center font-bold">{boxData.info["eng"]}</p>
        </div>
      );
}
