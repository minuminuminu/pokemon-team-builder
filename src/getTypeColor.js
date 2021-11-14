export const getTypeColor = (str) => {
  switch (str) {
    case "fire":
      return { color: "#e65c5c", textColor: "black" };
    case "ice":
      return { color: "#6af1f1", textColor: "black" };
    case "grass":
      return { color: "#5ef77f", textColor: "black" };
    case "bug":
      return { color: "#83be90", textColor: "black" };
    case "poison":
      return { color: "#f050e2", textColor: "black" };
    case "flying":
      return { color: "#70b7cc", textColor: "black" };
    case "ground":
      return { color: "#8d4330", textColor: "white" };
    case "steel":
      return { color: "#979fa1", textColor: "black" };
    case "normal":
      return { color: "#c0cacc", textColor: "black" };
    case "electric":
      return { color: "#dbe961", textColor: "black" };
    case "fighting":
      return { color: "#d14f4f", textColor: "black" };
    case "psychic":
      return { color: "#d639b4", textColor: "white" };
    case "rock":
      return { color: "#e0740f", textColor: "white" };
    case "ghost":
      return { color: "#79127c", textColor: "white" };
    case "water":
      return { color: "#62c2df", textColor: "black" };
    case "dark":
      return { color: "#523620", textColor: "white" };
    case "fairy":
      return { color: "#ff9be9", textColor: "white" };
    case "dragon":
      return { color: "#002c8a", textColor: "white" };
    default:
      return "transparent";
  }
};
