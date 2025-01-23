export const boardBoxInit = () => {
    let initValue = 0;
    let isHugeBox = false;

    const refBoxs = Array.from({ length: 40 }, (_, i) => {
      let box = {
        w: 0,
        h: 0,
        position: [
          { name: "", value: 0 },
          { name: "", value: 0 },
        ],
        rotateDegree: 0,
      };

      if (i <= 9) {
        if (i === 0) {
          box = { ...box, w: 12.5, h: 12.5 }; // Huge box
          initValue = 0;
          isHugeBox = true;
          box.rotateDegree = 325;
        } else {
          box = { ...box, w: 8.335, h: 12.5 }; // Adjusted width
          initValue += isHugeBox ? 12.5 : box.w;
          isHugeBox = false;
          box.rotateDegree = 0;
        }
        box = {
          ...box,
          position: [
            { name: "right", value: initValue },
            { name: "bottom", value: 0 },
          ],
        };
      } else if (i > 9 && i <= 19) {
        if (i === 10) {
          box = { ...box, w: 12.5, h: 12.5 };
          initValue = 0;
          isHugeBox = true;
          box.rotateDegree = 45;
        } else {
          box = { ...box, w: 12.5, h: 8.335 };
          initValue += isHugeBox ? 12.5 : box.h;
          isHugeBox = false;
          box.rotateDegree = 90;
        }
        box = {
          ...box,
          position: [
            { name: "right", value: 87.5 },
            { name: "bottom", value: initValue },
          ],
        };
      } else if (i > 19 && i <= 29) {
        if (i === 20) {
          box = { ...box, w: 12.5, h: 12.5 };
          initValue = 87.5;
          box.rotateDegree = 135;
        } else {
          box = { ...box, w: 8.335, h: 12.5 };
          initValue -= box.w;
          box.rotateDegree = 180;
        }
        box = {
          ...box,
          position: [
            { name: "right", value: initValue },
            { name: "bottom", value: 87.5 },
          ],
        };
      } else {
        if (i === 30) {
          box = { ...box, w: 12.5, h: 12.5 };
          initValue = 87.5;
          box.rotateDegree = 225;
        } else {
          box = { ...box, w: 12.5, h: 8.335 };
          initValue -=  box.h;
          box.rotateDegree = 270;
        }
        box = {
          ...box,
          position: [
            { name: "right", value: 0 },
            { name: "bottom", value: initValue },
          ],
        };
      }

      return box;
    });
    return refBoxs;
}