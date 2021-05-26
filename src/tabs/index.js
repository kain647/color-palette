import React, { Component } from "react";
import {
  Container,
  TitleProject,
  TabsBox,
  Tab,
  ContentBox,
  TitleContent,
  ColorContainer,
  ColorBox
} from "./styles";

const tabs = [
  {
    label: "#f44336",
    title: "Reds"
  },
  {
    label: "#e91e63",
    title: "Pinks"
  },
  {
    label: "#9c27b0",
    title: "Purples"
  },
  {
    label: "#673ab7",
    title: "Deep-Purples"
  },
  {
    label: "#3f51b5",
    title: "Indigos"
  },
  {
    label: "#2196f3",
    title: "Blues"
  },
  {
    label: "#03a9f4",
    title: "Light-Blues"
  },
  {
    label: "#00bcd5",
    title: "Cyans"
  },
  {
    label: "#009688",
    title: "Teals"
  },
  {
    label: "#4caf50",
    title: "Greens"
  },
  {
    label: "#8bc34a",
    title: "Light-Greens"
  },
  {
    label: "#cddc39",
    title: "Limes"
  },
  {
    label: "#ffeb3b",
    title: "Yellows"
  },
  {
    label: "#ff9800",
    title: "Ambers"
  },
  {
    label: "#ff5722",
    title: "Deep-Oranges"
  },
  {
    label: "#795548",
    title: "Browns"
  },
  {
    label: "#9e9e9e",
    title: "Greys"
  },
  {
    label: "#607d8b",
    title: "Blue-Greys"
  }
];

const colors = {
  reds: [
    "#FF6659",
    "#FF6154",
    "#FF5C4F",
    "#ff574A",
    "#ff5245",
    "#fe4d40",
    "#f9483b",
    "#f44336",
    "#EF3E31",
    "#EA392C",
    "#E53427",
    "#E02F22",
    "#DB2A1D",
    "#D62518",
    "#D12013"
  ],
  pinks: [
    "#FF4186",
    "#FF3C81",
    "#FF377C",
    "#FD3277",
    "#F82D72",
    "#F3286D",
    "#EE2368",
    "#E91E63",
    "#E4195E",
    "#DF1459",
    "#DA0F54",
    "#D50A4F",
    "#D0054A",
    "#CB0045",
    "#C60040"
  ],
  purples: [
    "#bf4ad3",
    "#ba45ce",
    "#b540c9",
    "#b03bc4",
    "#ab36bf",
    "#a631ba",
    "#a12cb5",
    "#9c27b0",
    "#9722ab",
    "#921da6",
    "#8d18a1",
    "#88139c",
    "#830e97",
    "#7e0992",
    "#79048d"
  ],
  "deep-purples": [
    "#8A5DDA",
    "#8558D5",
    "#8053D0",
    "#7B4ECB",
    "#7649C6",
    "#7144C1",
    "#6C3FBC",
    "#673AB7",
    "#6235B2",
    "#5D30AD",
    "#582BA8",
    "#5326A3",
    "#4E219E",
    "#491C99",
    "#441794"
  ],
  indigos: [
    "#6274D8",
    "#5D6FD3",
    "#586ACE",
    "#5365C9",
    "#4E60C4",
    "#495BBF",
    "#4456BA",
    "#3F51B5",
    "#3A4CB0",
    "#3547AB",
    "#3042A6",
    "#2B3DA1",
    "#26389C",
    "#213397",
    "#1C2E92"
  ],
  blues: [
    "#44B9FF",
    "#3FB4FF",
    "#3AAFFF",
    "#35AAFF",
    "#30A5FF",
    "#2BA0FD",
    "#269BF8",
    "#2196F3",
    "#1C91EE",
    "#178CE9",
    "#1287E4",
    "#0D82DF",
    "#087DDA",
    "#0378D5",
    "#0073D0"
  ],
  "light-blues": [
    "#26CCFF",
    "#21C7FF",
    "#1CC2FF",
    "#17BDFF",
    "#12B8FF",
    "#0DB3FE",
    "#08AEF9",
    "#03A9F4",
    "#00A4EF",
    "#009FEA",
    "#009AE5",
    "#0095E0",
    "#0090DB",
    "#008BD6",
    "#0086D1"
  ],
  cyans: [
    "#23DFF8",
    "#1EDAF3",
    "#19D5EE",
    "#14D0E9",
    "#0FCBE4",
    "#0AC6DF",
    "#05C1DA",
    "#00BCD5",
    "#00B7D0",
    "#00B2CB",
    "#00ADC6",
    "#00A8C1",
    "#00A3BC",
    "#009EB7",
    "#0099B2"
  ],
  teals: [
    "#23B9AB",
    "#1EB4A6",
    "#19AFA1",
    "#14AA9C",
    "#0FA597",
    "#0AA092",
    "#059B8D",
    "#009688",
    "#009183",
    "#008C7E",
    "#008779",
    "#008274",
    "#007D6F",
    "#00786A",
    "#007365"
  ],
  greens: [
    "#6FD273",
    "#6ACD6E",
    "#65C869",
    "#60C364",
    "#5BBE5F",
    "#56B95A",
    "#51B455",
    "#4CAF50",
    "#47AA4B",
    "#42A546",
    "#3DA041",
    "#389B3C",
    "#339637",
    "#2E9132",
    "#298C2D"
  ],
  "light-greens": [
    "#AEE66D",
    "#A9E168",
    "#A4DC63",
    "#9FD75E",
    "#9AD259",
    "#95CD54",
    "#90C84F",
    "#8BC34A",
    "#86BE45",
    "#81B940",
    "#7CB43B",
    "#77AF36",
    "#72AA31",
    "#6DA52C",
    "#68A027"
  ],
  limes: [
    "#F0FF5C",
    "#EBFA57",
    "#E6F552",
    "#E1F04D",
    "#DCEB48",
    "#D7E643",
    "#D2E13E",
    "#CDDC39",
    "#C8D734",
    "#C3D22F",
    "#BECD2A",
    "#B9C825",
    "#B4C320",
    "#AFBE1B",
    "#AAB916"
  ],
  yellows: [
    "#FFFF5E",
    "#FFFF59",
    "#FFFF54",
    "#FFFF4F",
    "#FFFA4A",
    "#FFF545",
    "#FFF040",
    "#FFEB3B",
    "#FAE636",
    "#F5E131",
    "#F0DC2C",
    "#EBD727",
    "#E6D222",
    "#E1CD1D",
    "#DCC818"
  ],
  ambers: [
    "#FFBB23",
    "#FFB61E",
    "#FFB119",
    "#FFAC14",
    "#FFA70F",
    "#FFA20A",
    "#FF9D05",
    "#FF9800",
    "#FA9300",
    "#F58E00",
    "#F08900",
    "#EB8400",
    "#E67F00",
    "#E17A00",
    "#DC7500"
  ],
  "deep-oranges": [
    "#FF7A45",
    "#FF7540",
    "#FF703B",
    "#FF6B36",
    "#FF6631",
    "#FF612C",
    "#FF5C27",
    "#FF5722",
    "#FA521D",
    "#F54D18",
    "#F04813",
    "#EB430E",
    "#E63E09",
    "#E13904",
    "#DC3400"
  ],
  browns: [
    "#9C786B",
    "#977366",
    "#926E61",
    "#8D695C",
    "#886457",
    "#835F52",
    "#7E5A4D",
    "#795548",
    "#745043",
    "#6F4B3E",
    "#6A4639",
    "#654134",
    "#603C2F",
    "#5B372A",
    "#563225"
  ],
  greys: [
    "#C1C1C1",
    "#BCBCBC",
    "#B7B7B7",
    "#B2B2B2",
    "#ADADAD",
    "#A8A8A8",
    "#A3A3A3",
    "#9E9E9E",
    "#999999",
    "#949494",
    "#8F8F8F",
    "#8A8A8A",
    "#858585",
    "#808080",
    "#7B7B7B"
  ],
  "blue-greys": [
    "#83A0AE",
    "#7E9BA9",
    "#7996A4",
    "#74919F",
    "#6F8C9A",
    "#6A8795",
    "#658290",
    "#607D8B",
    "#5B7886",
    "#567381",
    "#516E7C",
    "#4C6977",
    "#476472",
    "#425F6D",
    "#3D5A68"
  ]
};

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { active: 0 };
  }
  changeTab(index) {
    this.setState({
      active: index
    });
  }

  render() {
    const { active } = this.state;
    const { items } = this.props;
    const colorSet = colors[tabs[active].title.toLowerCase()];
    return (
      <Container>
        <TitleProject>COLOR PALETTE</TitleProject>
        <TabsBox>
          {items.map((item, index) => (
            <Tab
              key={item.label}
              onClick={() => {
                this.changeTab(index);
              }}
              active={active === index}
              label={item.label}
            />
          ))}
        </TabsBox>
        <ContentBox>
          <TitleContent>{items[active].title}</TitleContent>
          <ColorContainer>
            {colorSet.map(item => {
              return (
                <ColorBox
                  style={{
                    background: item
                  }}
                >
                  {item}
                </ColorBox>
              );
            })}
          </ColorContainer>
        </ContentBox>
      </Container>
    );
  }
}
const Content = () => {
  return <Tabs items={tabs} />;
};

export default Content;
