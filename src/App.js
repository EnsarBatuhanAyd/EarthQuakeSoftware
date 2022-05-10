import "./App.css";
import React from "react";
import { useState } from "react";
import firebase1 from "firebase/compat/app";
import "firebase/compat/firestore";
import {
  Viewer,
  Entity,
  EntityDescription,
  // PointGraphics,
  BillboardGraphics,
} from "resium";
import {
  // JulianDate,
  // ClockRange,
  // ClockStep,
  Cartesian3,
  // Color,
  // Clock,
} from "cesium";
import quakeicon from "./quake.png";
import homeicon from "./home.png"

function App() {
  const [Nameone, setNameone] = useState("");
  const [Timeone, setTimeone] = useState("");
  const [Depthone, setDepthone] = useState("");
  const [Farawayone, setFarawayone] = useState(0);
  const [Magnitudeone, setMagnitudeone] = useState(0);
  const [Longitudeone, setLongitudeone] = useState(-0.001545);
  const [Latitudeone, setLatitudeone] = useState(51.477928);
  const [Riskone, setRiskone] = useState(0);

  const [Nametwo, setNametwo] = useState("");
  const [Timetwo, setTimetwo] = useState("");
  const [Depthtwo, setDepthtwo] = useState("");
  const [Farawaytwo, setFarawaytwo] = useState(0);
  const [Magnitudetwo, setMagnitudetwo] = useState(0);
  const [Longitudetwo, setLongitudetwo] = useState(-0.001545);
  const [Latitudetwo, setLatitudetwo] = useState(51.477928);
  const [Risktwo, setRisktwo] = useState(0);

  const [Namethree, setNamethree] = useState("");
  const [Timethree, setTimethree] = useState("");
  const [Depththree, setDepththree] = useState("");
  const [Farawaythree, setFarawaythree] = useState(0);
  const [Magnitudethree, setMagnitudethree] = useState(0);
  const [Longitudethree, setLongitudethree] = useState(-0.001545);
  const [Latitudethree, setLatitudethree] = useState(51.477928);
  const [Riskthree, setRiskthree] = useState(0);

  const [Namefour, setNamefour] = useState("");
  const [Timefour, setTimefour] = useState("");
  const [Depthfour, setDepthfour] = useState("");
  const [Farawayfour, setFarawayfour] = useState(0);
  const [Magnitudefour, setMagnitudefour] = useState(0);
  const [Longitudefour, setLongitudefour] = useState(-0.001545);
  const [Latitudefour, setLatitudefour] = useState(51.477928);
  const [Riskfour, setRiskfour] = useState(0);

  const [Namefive, setNamefive] = useState("");
  const [Timefive, setTimefive] = useState("");
  const [Depthfive, setDepthfive] = useState("");
  const [Farawayfive, setFarawayfive] = useState(0);
  const [Magnitudefive, setMagnitudefive] = useState(0);
  const [Longitudefive, setLongitudefive] = useState(-0.001545);
  const [Latitudefive, setLatitudefive] = useState(51.477928);
  const [Riskfive, setRiskfive] = useState(0);

  const [Namesix, setNamesix] = useState("");
  const [Timesix, setTimesix] = useState("");
  const [Depthsix, setDepthsix] = useState("");
  const [Farawaysix, setFarawaysix] = useState(0);
  const [Magnitudesix, setMagnitudesix] = useState(0);
  const [Longitudesix, setLongitudesix] = useState(-0.001545);
  const [Latitudesix, setLatitudesix] = useState(51.477928);
  const [Risksix, setRisksix] = useState(0);

  const [Nameseven, setNameseven] = useState("");
  const [Timeseven, setTimeseven] = useState("");
  const [Depthseven, setDepthseven] = useState("");
  const [Farawayseven, setFarawayseven] = useState(0);
  const [Magnitudeseven, setMagnitudeseven] = useState(0);
  const [Longitudeseven, setLongitudeseven] = useState(-0.001545);
  const [Latitudeseven, setLatitudeseven] = useState(51.477928);
  const [Riskseven, setRiskseven] = useState(0);

  const [Nameeight, setNameeight] = useState("");
  const [Timeeight, setTimeeight] = useState("");
  const [Deptheight, setDeptheight] = useState("");
  const [Farawayeight, setFarawayeight] = useState(0);
  const [Magnitudeeight, setMagnitudeeight] = useState(0);
  const [Longitudeeight, setLongitudeeight] = useState(-0.001545);
  const [Latitudeeight, setLatitudeeight] = useState(51.477928);
  const [Riskeight, setRiskeight] = useState(0);

  const [Namenine, setNamenine] = useState("");
  const [Timenine, setTimenine] = useState("");
  const [Depthnine, setDepthnine] = useState("");
  const [Farawaynine, setFarawaynine] = useState(0);
  const [Magnitudenine, setMagnitudenine] = useState(0);
  const [Longitudenine, setLongitudenine] = useState(-0.001545);
  const [Latitudenine, setLatitudenine] = useState(51.477928);
  const [Risknine, setRisknine] = useState(0);

  const [Nameten, setNameten] = useState("");
  const [Timeten, setTimeten] = useState("");
  const [Depthten, setDepthten] = useState("");
  const [Farawayten, setFarawayten] = useState(0);
  const [Magnitudeten, setMagnitudeten] = useState(0);
  const [Longitudeten, setLongitudeten] = useState(-0.001545);
  const [Latitudeten, setLatitudeten] = useState(51.477928);
  const [Riskten, setRiskten] = useState(0);

  /////////

  const [Nameeleven, setNameeleven] = useState("");
  const [Timeeleven, setTimeeleven] = useState("");
  const [Deptheleven, setDeptheleven] = useState("");
  const [Farawayeleven, setFarawayeleven] = useState(0);
  const [Magnitudeeleven, setMagnitudeeleven] = useState(0);
  const [Longitudeeleven, setLongitudeeleven] = useState(-0.001545);
  const [Latitudeeleven, setLatitudeeleven] = useState(51.477928);
  const [Riskeleven, setRiskeleven] = useState(0);

  const [Nametwelve, setNametwelve] = useState("");
  const [Timetwelve, setTimetwelve] = useState("");
  const [Depthtwelve, setDepthtwelve] = useState("");
  const [Farawaytwelve, setFarawaytwelve] = useState(0);
  const [Magnitudetwelve, setMagnitudetwelve] = useState(0);
  const [Longitudetwelve, setLongitudetwelve] = useState(-0.001545);
  const [Latitudetwelve, setLatitudetwelve] = useState(51.477928);
  const [Risktwelve, setRisktwelve] = useState(0);

  const [Namethirteen, setNamethirteen] = useState("");
  const [Timethirteen, setTimethirteen] = useState("");
  const [Depththirteen, setDepththirteen] = useState("");
  const [Farawaythirteen, setFarawaythirteen] = useState(0);
  const [Magnitudethirteen, setMagnitudethirteen] = useState(0);
  const [Longitudethirteen, setLongitudethirteen] = useState(-0.001545);
  const [Latitudethirteen, setLatitudethirteen] = useState(51.477928);
  const [Riskthirteen, setRiskthirteen] = useState(0);

  const [Namefourteen, setNamefourteen] = useState("");
  const [Timefourteen, setTimefourteen] = useState("");
  const [Depthfourteen, setDepthfourteen] = useState("");
  const [Farawayfourteen, setFarawayfourteen] = useState(0);
  const [Magnitudefourteen, setMagnitudefourteen] = useState(0);
  const [Longitudefourteen, setLongitudefourteen] = useState(-0.001545);
  const [Latitudefourteen, setLatitudefourteen] = useState(51.477928);
  const [Riskfourteen, setRiskfourteen] = useState(0);

  const [Namefiveteen, setNamefiveteen] = useState("");
  const [Timefiveteen, setTimefiveteen] = useState("");
  const [Depthfiveteen, setDepthfiveteen] = useState("");
  const [Farawayfiveteen, setFarawayfiveteen] = useState(0);
  const [Magnitudefiveteen, setMagnitudefiveteen] = useState(0);
  const [Longitudefiveteen, setLongitudefiveteen] = useState(-0.001545);
  const [Latitudefiveteen, setLatitudefiveteen] = useState(51.477928);
  const [Riskfiveteen, setRiskfiveteen] = useState(0);

  const [Namesixteen, setNamesixteen] = useState("");
  const [Timesixteen, setTimesixteen] = useState("");
  const [Depthsixteen, setDepthsixteen] = useState("");
  const [Farawaysixteen, setFarawaysixteen] = useState(0);
  const [Magnitudesixteen, setMagnitudesixteen] = useState(0);
  const [Longitudesixteen, setLongitudesixteen] = useState(-0.001545);
  const [Latitudesixteen, setLatitudesixteen] = useState(51.477928);
  const [Risksixteen, setRisksixteen] = useState(0);

  const [Nameseventeen, setNameseventeen] = useState("");
  const [Timeseventeen, setTimeseventeen] = useState("");
  const [Depthseventeen, setDepthseventeen] = useState("");
  const [Farawayseventeen, setFarawayseventeen] = useState(0);
  const [Magnitudeseventeen, setMagnitudeseventeen] = useState(0);
  const [Longitudeseventeen, setLongitudeseventeen] = useState(-0.001545);
  const [Latitudeseventeen, setLatitudeseventeen] = useState(51.477928);
  const [Riskseventeen, setRiskseventeen] = useState(0);

  const [Nameeighteen, setNameeighteen] = useState("");
  const [Timeeighteen, setTimeeighteen] = useState("");
  const [Deptheighteen, setDeptheighteen] = useState("");
  const [Farawayeighteen, setFarawayeighteen] = useState(0);
  const [Magnitudeeighteen, setMagnitudeeighteen] = useState(0);
  const [Longitudeeighteen, setLongitudeeighteen] = useState(-0.001545);
  const [Latitudeeighteen, setLatitudeeighteen] = useState(51.477928);
  const [Riskeighteen, setRiskeighteen] = useState(0);

  const [Namenineteen, setNamenineteen] = useState("");
  const [Timenineteen, setTimenineteen] = useState("");
  const [Depthnineteen, setDepthnineteen] = useState("");
  const [Farawaynineteen, setFarawaynineteen] = useState(0);
  const [Magnitudenineteen, setMagnitudenineteen] = useState(0);
  const [Longitudenineteen, setLongitudenineteen] = useState(-0.001545);
  const [Latitudenineteen, setLatitudenineteen] = useState(51.477928);
  const [Risknineteen, setRisknineteen] = useState(0);

  const [Nametwenty, setNametwenty] = useState("");
  const [Timetwenty, setTimetwenty] = useState("");
  const [Depthtwenty, setDepthtwenty] = useState("");
  const [Farawaytwenty, setFarawaytwenty] = useState(0);
  const [Magnitudetwenty, setMagnitudetwenty] = useState(0);
  const [Longitudetwenty, setLongitudetwenty] = useState(-0.001545);
  const [Latitudetwenty, setLatitudetwenty] = useState(51.477928);
  const [Risktwenty, setRisktwenty] = useState(0);

  const [LiveLatitude, setLiveLatitude] = useState(32.498914);
  const [LiveLongitude, setLiveLongitude] = useState(37.87154);

  var firebaseConfig = {
    apiKey: "AIzaSyBgB_ygoRYktn85S5IAKD1VWktQzIqvLGg",
    databaseURL: "https://earthquake-dataset-default-rtdb.firebaseio.com",
    projectId: "earthquake-dataset",
  };

  // Initialize Firebase
  firebase1.initializeApp(firebaseConfig);
  const db = firebase1.firestore();
  const doc_ref = db.collection("EarthQuakes");
  console.log("Data Pulling!");
  doc_ref.get().then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log(data);
  

    setLongitudeone(Number(data[0].Longitude));
    setLatitudeone(Number(data[0].Latitude));
    setMagnitudeone(Number(data[0].Magnitude));
    setNameone(data[0].LocationName);
    setTimeone(data[0].Time);
    setDepthone(Number(data[0].Depth));
    setFarawayone(data[0].FarAwayTo);
    const risk0 = data[0].Magnitude;
    setRiskone(Number(risk0));

    setLongitudetwo(Number(data[1].Longitude));
    setLatitudetwo(Number(data[1].Latitude));
    setMagnitudetwo(Number(data[1].Magnitude));
    setNametwo(data[1].LocationName);
    setTimetwo(data[1].Time);
    setDepthtwo(Number(data[1].Depth));
    setFarawaytwo(data[1].FarAwayTo);
    const risk1 = data[1].Magnitude;
    setRisktwo(Number(risk1));

    setLongitudethree(Number(data[2].Longitude));
    setLatitudethree(Number(data[2].Latitude));
    setMagnitudethree(Number(data[2].Magnitude));
    setNamethree(data[2].LocationName);
    setTimethree(data[2].Time);
    setDepththree(data[2].Depth);
    setFarawaythree(data[2].FarAwayTo);
    const risk2 = data[2].Magnitude;
    setRiskthree(Number(risk2));

    setLongitudefour(Number(data[3].Longitude));
    setLatitudefour(Number(data[3].Latitude));
    setMagnitudefour(Number(data[3].Magnitude));
    setNamefour(data[3].LocationName);
    setTimefour(data[3].Time);
    setDepthfour(data[3].Depth);
    setFarawayfour(data[3].FarAwayTo);
    const risk3 = data[3].Magnitude;
    setRiskfour(Number(risk3));

    setLongitudefive(Number(data[4].Longitude));
    setLatitudefive(Number(data[4].Latitude));
    setMagnitudefive(Number(data[4].Magnitude));
    setNamefive(data[4].LocationName);
    setTimefive(data[4].Time);
    setDepthfive(data[4].Depth);
    setFarawayfive(data[4].FarAwayTo);
    const risk4 = data[4].Magnitude;
    setRiskfive(Number(risk4));

    setLongitudesix(Number(data[5].Longitude));
    setLatitudesix(Number(data[5].Latitude));
    setMagnitudesix(Number(data[5].Magnitude));
    setNamesix(data[5].LocationName);
    setTimesix(data[5].Time);
    setDepthsix(data[5].Depth);
    setFarawaysix(data[5].FarAwayTo);
    const risk5 = data[5].Magnitude;
    setRisksix(Number(risk5));

    setLongitudeseven(Number(data[6].Longitude));
    setLatitudeseven(Number(data[6].Latitude));
    setMagnitudeseven(Number(data[6].Magnitude));
    setNameseven(data[6].LocationName);
    setTimeseven(data[6].Time);
    setDepthseven(data[6].Depth);
    setFarawayseven(data[6].FarAwayTo);
    const risk6 = data[6].Magnitude;
    setRiskseven(Number(risk6));

    setLongitudeeight(Number(data[7].Longitude));
    setLatitudeeight(Number(data[7].Latitude));
    setMagnitudeeight(Number(data[7].Magnitude));
    setNameeight(data[7].LocationName);
    setTimeeight(data[7].Time);
    setDeptheight(data[7].Depth);
    setFarawayeight(data[7].FarAwayTo);
    const risk7 = data[7].Magnitude;
    setRiskeight(Number(risk7));

    setLongitudenine(Number(data[8].Longitude));
    setLatitudenine(Number(data[8].Latitude));
    setMagnitudenine(Number(data[8].Magnitude));
    setNamenine(data[8].LocationName);
    setTimenine(data[8].Time);
    setDepthnine(data[8].Depth);
    setFarawaynine(data[8].FarAwayTo);
    const risk8 = data[8].Magnitude;
    setRisknine(Number(risk8));

    setLongitudeten(Number(data[9].Longitude));
    setLatitudeten(Number(data[9].Latitude));
    setMagnitudeten(Number(data[9].Magnitude));
    setNameten(data[9].LocationName);
    setTimeten(data[9].Time);
    setDepthten(data[9].Depth);
    setFarawayten(data[9].FarAwayTo);
    const risk9 = data[9].Magnitude;
    setRiskten(Number(risk9));

    /////
    setLongitudeeleven(Number(data[10].Longitude));
    setLatitudeeleven(Number(data[10].Latitude));
    setMagnitudeeleven(Number(data[10].Magnitude));
    setNameeleven(data[10].LocationName);
    setTimeeleven(data[10].Time);
    setDeptheleven(Number(data[10].Depth));
    setFarawayeleven(data[10].FarAwayTo);
    const risk10 = data[10].Magnitude;
    setRiskeleven(Number(risk10));

    setLongitudetwelve(Number(data[11].Longitude));
    setLatitudetwelve(Number(data[11].Latitude));
    setMagnitudetwelve(Number(data[11].Magnitude));
    setNametwelve(data[11].LocationName);
    setTimetwelve(data[11].Time);
    setDepthtwelve(Number(data[11].Depth));
    setFarawaytwelve(data[11].FarAwayTo);
    const risk11 = data[11].Magnitude;
    setRisktwelve(Number(risk11));

    setLongitudethirteen(Number(data[12].Longitude));
    setLatitudethirteen(Number(data[12].Latitude));
    setMagnitudethirteen(Number(data[12].Magnitude));
    setNamethirteen(data[12].LocationName);
    setTimethirteen(data[12].Time);
    setDepththirteen(data[12].Depth);
    setFarawaythirteen(data[12].FarAwayTo);
    const risk12 = data[12].Magnitude;
    setRiskthirteen(Number(risk12));

    setLongitudefourteen(Number(data[13].Longitude));
    setLatitudefourteen(Number(data[13].Latitude));
    setMagnitudefourteen(Number(data[13].Magnitude));
    setNamefourteen(data[13].LocationName);
    setTimefourteen(data[13].Time);
    setDepthfourteen(data[13].Depth);
    setFarawayfourteen(data[13].FarAwayTo);
    const risk13 = data[13].Magnitude;
    setRiskfourteen(Number(risk13));

    setLongitudefiveteen(Number(data[14].Longitude));
    setLatitudefiveteen(Number(data[14].Latitude));
    setMagnitudefiveteen(Number(data[14].Magnitude));
    setNamefiveteen(data[14].LocationName);
    setTimefiveteen(data[14].Time);
    setDepthfiveteen(data[14].Depth);
    setFarawayfiveteen(data[14].FarAwayTo);
    const risk14 = data[14].Magnitude;
    setRiskfiveteen(Number(risk14));

    setLongitudesixteen(Number(data[15].Longitude));
    setLatitudesixteen(Number(data[15].Latitude));
    setMagnitudesixteen(Number(data[15].Magnitude));
    setNamesixteen(data[15].LocationName);
    setTimesixteen(data[15].Time);
    setDepthsixteen(data[15].Depth);
    setFarawaysixteen(data[15].FarAwayTo);
    const risk15 = data[15].Magnitude;
    setRisksixteen(Number(risk15));

    setLongitudeseventeen(Number(data[16].Longitude));
    setLatitudeseventeen(Number(data[16].Latitude));
    setMagnitudeseventeen(Number(data[16].Magnitude));
    setNameseventeen(data[16].LocationName);
    setTimeseventeen(data[16].Time);
    setDepthseventeen(data[16].Depth);
    setFarawayseventeen(data[16].FarAwayTo);
    const risk16 = data[16].Magnitude;
    setRiskseventeen(Number(risk16));

    setLongitudeeighteen(Number(data[17].Longitude));
    setLatitudeeighteen(Number(data[17].Latitude));
    setMagnitudeeighteen(Number(data[17].Magnitude));
    setNameeighteen(data[17].LocationName);
    setTimeeighteen(data[17].Time);
    setDeptheighteen(data[17].Depth);
    setFarawayeighteen(data[17].FarAwayTo);
    const risk17 = data[17].Magnitude;
    setRiskeighteen(Number(risk17));

    setLongitudenineteen(Number(data[18].Longitude));
    setLatitudenineteen(Number(data[18].Latitude));
    setMagnitudenineteen(Number(data[18].Magnitude));
    setNamenineteen(data[18].LocationName);
    setTimenineteen(data[18].Time);
    setDepthnineteen(data[18].Depth);
    setFarawaynineteen(data[18].FarAwayTo);
    const risk18 = data[18].Magnitude;
    setRisknineteen(Number(risk18));

    setLongitudetwenty(Number(data[19].Longitude));
    setLatitudetwenty(Number(data[19].Latitude));
    setMagnitudetwenty(Number(data[19].Magnitude));
    setNametwenty(data[19].LocationName);
    setTimetwenty(data[19].Time);
    setDepthtwenty(data[19].Depth);
    setFarawaytwenty(data[19].FarAwayTo);
    const risk19 = data[19].Magnitude;
    setRisktwenty(Number(risk19));

    console.log(
      Longitudeone,
      Latitudeone,
      Magnitudeone,
      Timeone,
      Nameone,
      Farawayone,
      Depthone
    );
    console.log(Longitudetwo, Latitudetwo);
    console.log(Longitudethree, Latitudethree);
    console.log(Longitudefour, Latitudefour);
    console.log(Longitudefive, Latitudefive);
    console.log(Longitudesix, Latitudesix);
    console.log(Longitudeseven, Latitudeseven);
    console.log(Longitudeeight, Latitudeeight);
    console.log(Longitudenine, Latitudenine);
    console.log(Longitudeten, Latitudeten);
    console.log(Longitudeeleven, Latitudeeleven);
    console.log(Longitudetwelve, Latitudetwelve);
    console.log(Longitudethirteen, Latitudethirteen);
    console.log(Longitudefourteen, Latitudefourteen);
    console.log(Longitudefiveteen, Latitudefiveteen);
    console.log(Longitudesixteen, Latitudesixteen);
    console.log(Longitudeseventeen, Latitudeseventeen);
    console.log(Longitudeeighteen, Latitudeeighteen);
    console.log(Longitudenineteen, Latitudenineteen);
    console.log(Longitudetwenty, Latitudetwenty);
  });

  return (
    <Viewer
      full
      homeButton={false}
      navigationHelpButton={false}
      geocoder={false}
      animation={false}
      timeline={false}
    >
      <Entity
        name="Your Location"
        position={Cartesian3.fromDegrees(LiveLatitude, LiveLongitude, 100)}
      >
        <BillboardGraphics image={homeicon} scale={1} ></BillboardGraphics>
        {/* <PointGraphics
          pixelSize={20}
          color={Color.GREEN}
          outlineColor={Color.WHITE}
          outlineWidth={2}
        ></PointGraphics> */}
        <EntityDescription>
          <style>{`
            .livetext {
              color: red;
            }
            .seperator{
              color:red;
            }
            `}</style>
          <h2>Your Location</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="livetext">Live Data</h3>
          <h3>Latitude: {LiveLatitude}</h3>
          <h3>Longitude: {LiveLongitude}</h3>
        </EntityDescription>
      </Entity>
      <Entity
        name={Nameone}
        position={Cartesian3.fromDegrees(Longitudeone, Latitudeone, 100)}
      >
        <BillboardGraphics
          image={quakeicon}
          scale={0.02 * Riskone}
        ></BillboardGraphics>
        {/* <PointGraphics
          pixelSize={Riskone * 10}
          color={Color.RED}
          outlineColor={Color.WHITE}
          outlineWidth={2}
        ></PointGraphics> */}
        <EntityDescription>
          <style>{`
            .livetext {
              color: red;
            }
            .seperator{
              color:red;
            }
            `}</style>
          <h2>{Nameone}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="livetext">Live Data</h3>
          <h3>Time: {Timeone}</h3>
          <h3>Latitude: {Latitudeone}</h3>
          <h3>Longitude: {Longitudeone}</h3>
          <h3>Magnitude: {Magnitudeone}</h3>
          <h3>Depth: {Depthone} km</h3>
          <h3>Far Away To: {Farawayone} km</h3>
        </EntityDescription>
      </Entity>
      <Entity
        name={Nametwo}
        position={Cartesian3.fromDegrees(Longitudetwo, Latitudetwo, 100)}
      >
        <BillboardGraphics
          image={quakeicon}
          scale={0.02 * Risktwo}
        ></BillboardGraphics>
        {/* <PointGraphics
          pixelSize={Risktwo * 10}
          color={Color.RED}
          outlineColor={Color.WHITE}
          outlineWidth={2}
        ></PointGraphics> */}

        <EntityDescription>
          <style>{`
            .livetext {
              color: red;
            }
            .seperator{
              color:red;
            }
            `}</style>
          <h2>{Nametwo}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="livetext">Live Data</h3>
          <h3>Time: {Timetwo}</h3>
          <h3>Latitude: {Latitudetwo}</h3>
          <h3>Longitude: {Longitudetwo}</h3>
          <h3>Magnitude: {Magnitudetwo}</h3>
          <h3>Depth: {Depthtwo} km</h3>
          <h3>Far Away To: {Farawaytwo} km</h3>
        </EntityDescription>
      </Entity>
      <Entity
        name={Namethree}
        position={Cartesian3.fromDegrees(Longitudethree, Latitudethree, 100)}
      >
        <BillboardGraphics
          image={quakeicon}
          scale={0.02 * Riskthree}
        ></BillboardGraphics>
        {/* <PointGraphics
          pixelSize={Riskthree * 10}
          color={Color.RED}
          outlineColor={Color.WHITE}
          outlineWidth={2}
        ></PointGraphics> */}
        <EntityDescription>
          <style>{`
            .livetext {
              color: red;
            }
            .seperator{
              color:red;
            }
            `}</style>
          <h2>{Namethree}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="livetext">Live Data</h3>
          <h3>Time: {Timethree}</h3>
          <h3>Latitude: {Latitudethree}</h3>
          <h3>Longitude: {Longitudethree}</h3>
          <h3>Magnitude: {Magnitudethree}</h3>
          <h3>Depth: {Depththree} km</h3>
          <h3>Far Away To: {Farawaythree} km</h3>
        </EntityDescription>
      </Entity>
      <Entity
        name={Namefour}
        position={Cartesian3.fromDegrees(Longitudefour, Latitudefour, 100)}
      >
        <BillboardGraphics image={quakeicon} scale={0.02*Riskfour} ></BillboardGraphics>
        {/* <PointGraphics
          pixelSize={Riskfour * 10}
          color={Color.RED}
          outlineColor={Color.WHITE}
          outlineWidth={2}
        ></PointGraphics> */}
        <EntityDescription>
          <style>{`
            .livetext {
              color: red;
            }
            .seperator{
              color:red;
            }
            `}</style>
          <h2>{Namefour}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="livetext">Live Data</h3>
          <h3>Time: {Timefour}</h3>
          <h3>Latitude: {Latitudefour}</h3>
          <h3>Longitude: {Longitudefour}</h3>
          <h3>Magnitude: {Magnitudefour}</h3>
          <h3>Depth: {Depthfour} km</h3>
          <h3>Far Away To: {Farawayfour} km</h3>
        </EntityDescription>
      </Entity>{" "}
      <Entity
        name={Namefive}
        position={Cartesian3.fromDegrees(Longitudefive, Latitudefive, 100)}
      >
          <BillboardGraphics image={quakeicon} scale={0.02*Riskfive} ></BillboardGraphics>
        {/* <PointGraphics
          pixelSize={Riskfive * 10}
          color={Color.RED}
          outlineColor={Color.WHITE}
          outlineWidth={2}
        ></PointGraphics> */}
        <EntityDescription>
          <style>{`
            .livetext {
              color: red;
            }
            .seperator{
              color:red;
            }
            `}</style>
          <h2>{Namefive}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="livetext">Live Data</h3>
          <h3>Time: {Timefive}</h3>
          <h3>Latitude: {Latitudefive}</h3>
          <h3>Longitude: {Longitudefive}</h3>
          <h3>Magnitude: {Magnitudefive}</h3>
          <h3>Depth: {Depthfive} km</h3>
          <h3>Far Away To: {Farawayfive} km</h3>
        </EntityDescription>
      </Entity>
      <Entity
        name={Namesix}
        position={Cartesian3.fromDegrees(Longitudesix, Latitudesix, 100)}
      >
          <BillboardGraphics image={quakeicon} scale={0.02*Risksix} ></BillboardGraphics>
        {/* <PointGraphics
          pixelSize={Risksix * 10}
          color={Color.RED}
          outlineColor={Color.WHITE}
          outlineWidth={2}
        ></PointGraphics> */}
        <EntityDescription>
          <style>{`
            .livetext {
              color: red;
            }
            .seperator{
              color:red;
            }
            `}</style>
          <h2>{Namesix}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="livetext">Live Data</h3>
          <h3>Time: {Timesix}</h3>
          <h3>Latitude: {Latitudesix}</h3>
          <h3>Longitude: {Longitudesix}</h3>
          <h3>Magnitude: {Magnitudesix}</h3>
          <h3>Depth: {Depthsix} km</h3>
          <h3>Far Away To: {Farawaysix} km</h3>
        </EntityDescription>
      </Entity>
      <Entity
        name={Nameseven}
        position={Cartesian3.fromDegrees(Longitudeseven, Latitudeseven, 100)}
      >
          <BillboardGraphics image={quakeicon} scale={0.02*Riskseven} ></BillboardGraphics>
        {/* <PointGraphics
          pixelSize={Riskseven * 10}
          color={Color.RED}
          outlineColor={Color.WHITE}
          outlineWidth={2}
        ></PointGraphics> */}
        <EntityDescription>
          <style>{`
            .livetext {
              color: red;
            }
            .seperator{
              color:red;
            }
            `}</style>
          <h2>{Nameseven}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="livetext">Live Data</h3>
          <h3>Time: {Timeseven}</h3>
          <h3>Latitude: {Latitudeseven}</h3>
          <h3>Longitude: {Longitudeseven}</h3>
          <h3>Magnitude: {Magnitudeseven}</h3>
          <h3>Depth: {Depthseven} km</h3>
          <h3>Far Away To: {Farawayseven} km</h3>
        </EntityDescription>
      </Entity>{" "}
      <Entity
        name={Nameeight}
        position={Cartesian3.fromDegrees(Longitudeeight, Latitudeeight, 100)}
      >
          <BillboardGraphics image={quakeicon} scale={0.02*Riskeight} ></BillboardGraphics>
        {/* <PointGraphics
          pixelSize={Riskeight * 10}
          color={Color.RED}
          outlineColor={Color.WHITE}
          outlineWidth={2}
        ></PointGraphics> */}
        <EntityDescription>
          <style>{`
            .livetext {
              color: red;
            }
            .seperator{
              color:red;
            }
            `}</style>
          <h2>{Nameeight}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="livetext">Live Data</h3>
          <h3>Time: {Timeeight}</h3>
          <h3>Latitude: {Latitudeeight}</h3>
          <h3>Longitude: {Longitudeeight}</h3>
          <h3>Magnitude: {Magnitudeeight}</h3>
          <h3>Depth: {Deptheight} km</h3>
          <h3>Far Away To: {Farawayeight} km</h3>
        </EntityDescription>
      </Entity>
      <Entity
        name={Namenine}
        position={Cartesian3.fromDegrees(Longitudenine, Latitudenine, 100)}
      >
          <BillboardGraphics image={quakeicon} scale={0.02*Risknine} ></BillboardGraphics>
        {/* <PointGraphics
          pixelSize={Risknine * 10}
          color={Color.RED}
          outlineColor={Color.WHITE}
          outlineWidth={2}
        ></PointGraphics> */}
        <EntityDescription>
          <style>{`
            .livetext {
              color: red;
            }
            .seperator{
              color:red;
            }
            `}</style>
          <h2>{Namenine}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="livetext">Live Data</h3>
          <h3>Time: {Timenine}</h3>
          <h3>Latitude: {Latitudenine}</h3>
          <h3>Longitude: {Longitudenine}</h3>
          <h3>Magnitude: {Magnitudenine}</h3>
          <h3>Depth: {Depthnine} km</h3>
          <h3>Far Away To: {Farawaynine} km</h3>
        </EntityDescription>
      </Entity>
      <Entity
        name={Nameten}
        position={Cartesian3.fromDegrees(Longitudeten, Latitudeten, 100)}
      >
          <BillboardGraphics image={quakeicon} scale={0.02*Riskten} ></BillboardGraphics>
        {/* <PointGraphics
          pixelSize={Riskten * 10}
          color={Color.RED}
          outlineColor={Color.WHITE}
          outlineWidth={2}
        ></PointGraphics> */}
        <EntityDescription>
          <style>{`
            .livetext {
              color: red;
            }
            .seperator{
              color:red;
            }
            `}</style>
          <h2>{Nameten}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="livetext">Live Data</h3>
          <h3>Time: {Timeten}</h3>
          <h3>Latitude: {Latitudeten}</h3>
          <h3>Longitude: {Longitudeten}</h3>
          <h3>Magnitude: {Magnitudeten}</h3>
          <h3>Depth: {Depthten} km</h3>
          <h3>Far Away To: {Farawayten} km</h3>
        </EntityDescription>
      </Entity>
      <Entity
        name={Nameeleven}
        position={Cartesian3.fromDegrees(Longitudeeleven, Latitudeeleven, 100)}
      >
          <BillboardGraphics image={quakeicon} scale={0.02*Riskeleven} ></BillboardGraphics>
        {/* <PointGraphics
          pixelSize={Riskeleven * 10}
          color={Color.RED}
          outlineColor={Color.WHITE}
          outlineWidth={2}
        ></PointGraphics> */}
        <EntityDescription>
          <style>{`
            .livetext {
              color: red;
            }
            .seperator{
              color:red;
            }
            `}</style>
          <h2>{Nameeleven}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="livetext">Live Data</h3>
          <h3>Time: {Timeeleven}</h3>
          <h3>Latitude: {Latitudeeleven}</h3>
          <h3>Longitude: {Longitudeeleven}</h3>
          <h3>Magnitude: {Magnitudeeleven}</h3>
          <h3>Depth: {Deptheleven} km</h3>
          <h3>Far Away To: {Farawayeleven} km</h3>
        </EntityDescription>
      </Entity>
      <Entity
        name={Nametwelve}
        position={Cartesian3.fromDegrees(Longitudetwelve, Latitudetwelve, 100)}
      >
          <BillboardGraphics image={quakeicon} scale={0.02*Risktwelve} ></BillboardGraphics>
        {/* <PointGraphics
          pixelSize={Risktwelve * 10}
          color={Color.RED}
          outlineColor={Color.WHITE}
          outlineWidth={2}
        ></PointGraphics> */}

        <EntityDescription>
          <style>{`
            .livetext {
              color: red;
            }
            .seperator{
              color:red;
            }
            `}</style>
          <h2>{Nametwelve}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="livetext">Live Data</h3>
          <h3>Time: {Timetwelve}</h3>
          <h3>Latitude: {Latitudetwelve}</h3>
          <h3>Longitude: {Longitudetwelve}</h3>
          <h3>Magnitude: {Magnitudetwelve}</h3>
          <h3>Depth: {Depthtwelve} km</h3>
          <h3>Far Away To: {Farawaytwelve} km</h3>
        </EntityDescription>
      </Entity>
      <Entity
        name={Namethirteen}
        position={Cartesian3.fromDegrees(
          Longitudethirteen,
          Latitudethirteen,
          100
        )}

      >
          <BillboardGraphics image={quakeicon} scale={0.02*Riskthirteen} ></BillboardGraphics>
        {/* <PointGraphics
          pixelSize={Riskthirteen * 10}
          color={Color.RED}
          outlineColor={Color.WHITE}
          outlineWidth={2}
        ></PointGraphics> */}
        <EntityDescription>
          <style>{`
            .livetext {
              color: red;
            }
            .seperator{
              color:red;
            }
            `}</style>
          <h2>{Namethirteen}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="livetext">Live Data</h3>
          <h3>Time: {Timethirteen}</h3>
          <h3>Latitude: {Latitudethirteen}</h3>
          <h3>Longitude: {Longitudethirteen}</h3>
          <h3>Magnitude: {Magnitudethirteen}</h3>
          <h3>Depth: {Depththirteen} km</h3>
          <h3>Far Away To: {Farawaythirteen} km</h3>
        </EntityDescription>
      </Entity>
      <Entity
        name={Namefourteen}
        position={Cartesian3.fromDegrees(
          Longitudefourteen,
          Latitudefourteen,
          100
        )}
      >
          <BillboardGraphics image={quakeicon} scale={0.02*Riskfourteen} ></BillboardGraphics>
        {/* <PointGraphics
          pixelSize={Riskfourteen * 10}
          color={Color.RED}
          outlineColor={Color.WHITE}
          outlineWidth={2}
        ></PointGraphics> */}
        <EntityDescription>
          <style>{`
            .livetext {
              color: red;
            }
            .seperator{
              color:red;
            }
            `}</style>
          <h2>{Namefourteen}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="livetext">Live Data</h3>
          <h3>Time: {Timefourteen}</h3>
          <h3>Latitude: {Latitudefourteen}</h3>
          <h3>Longitude: {Longitudefourteen}</h3>
          <h3>Magnitude: {Magnitudefourteen}</h3>
          <h3>Depth: {Depthfourteen} km</h3>
          <h3>Far Away To: {Farawayfourteen} km</h3>
        </EntityDescription>
      </Entity>{" "}
      <Entity
        name={Namefiveteen}
        position={Cartesian3.fromDegrees(
          Longitudefiveteen,
          Latitudefiveteen,
          100
        )}
      >
          <BillboardGraphics image={quakeicon} scale={0.02*Riskfiveteen} ></BillboardGraphics>
        {/* <PointGraphics
          pixelSize={Riskfiveteen * 10}
          color={Color.RED}
          outlineColor={Color.WHITE}
          outlineWidth={2}
        ></PointGraphics> */}
        <EntityDescription>
          <style>{`
            .livetext {
              color: red;
            }
            .seperator{
              color:red;
            }
            `}</style>
          <h2>{Namefiveteen}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="livetext">Live Data</h3>
          <h3>Time: {Timefiveteen}</h3>
          <h3>Latitude: {Latitudefiveteen}</h3>
          <h3>Longitude: {Longitudefiveteen}</h3>
          <h3>Magnitude: {Magnitudefiveteen}</h3>
          <h3>Depth: {Depthfiveteen} km</h3>
          <h3>Far Away To: {Farawayfiveteen} km</h3>
        </EntityDescription>
      </Entity>
      <Entity
        name={Namesixteen}
        position={Cartesian3.fromDegrees(
          Longitudesixteen,
          Latitudesixteen,
          100
        )}
      >
          <BillboardGraphics image={quakeicon} scale={0.02*Risksixteen} ></BillboardGraphics>
        {/* <PointGraphics
          pixelSize={Risksixteen * 10}
          color={Color.RED}
          outlineColor={Color.WHITE}
          outlineWidth={2}
        ></PointGraphics> */}
        <EntityDescription>
          <style>{`
            .livetext {
              color: red;
            }
            .seperator{
              color:red;
            }
            `}</style>
          <h2>{Namesixteen}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="livetext">Live Data</h3>
          <h3>Time: {Timesixteen}</h3>
          <h3>Latitude: {Latitudesixteen}</h3>
          <h3>Longitude: {Longitudesixteen}</h3>
          <h3>Magnitude: {Magnitudesixteen}</h3>
          <h3>Depth: {Depthsixteen} km</h3>
          <h3>Far Away To: {Farawaysixteen} km</h3>
        </EntityDescription>
      </Entity>
      <Entity
        name={Nameseventeen}
        position={Cartesian3.fromDegrees(
          Longitudeseventeen,
          Latitudeseventeen,
          100
        )}
      >
          <BillboardGraphics image={quakeicon} scale={0.02*Riskseventeen} ></BillboardGraphics>
        {/* <PointGraphics
          pixelSize={Riskseventeen * 10}
          color={Color.RED}
          outlineColor={Color.WHITE}
          outlineWidth={2}
        ></PointGraphics> */}
        <EntityDescription>
          <style>{`
            .livetext {
              color: red;
            }
            .seperator{
              color:red;
            }
            `}</style>
          <h2>{Nameseventeen}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="livetext">Live Data</h3>
          <h3>Time: {Timeseventeen}</h3>
          <h3>Latitude: {Latitudeseventeen}</h3>
          <h3>Longitude: {Longitudeseventeen}</h3>
          <h3>Magnitude: {Magnitudeseventeen}</h3>
          <h3>Depth: {Depthseventeen} km</h3>
          <h3>Far Away To: {Farawayseventeen} km</h3>
        </EntityDescription>
      </Entity>{" "}
      <Entity
        name={Nameeighteen}
        position={Cartesian3.fromDegrees(
          Longitudeeighteen,
          Latitudeeighteen,
          100
        )}
      >
          <BillboardGraphics image={quakeicon} scale={0.02*Riskeighteen} ></BillboardGraphics>
        {/* <PointGraphics
          pixelSize={Riskeighteen * 10}
          color={Color.RED}
          outlineColor={Color.WHITE}
          outlineWidth={2}
        ></PointGraphics> */}
        <EntityDescription>
          <style>{`
            .livetext {
              color: red;
            }
            .seperator{
              color:red;
            }
            `}</style>
          <h2>{Nameeighteen}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="livetext">Live Data</h3>
          <h3>Time: {Timeeighteen}</h3>
          <h3>Latitude: {Latitudeeighteen}</h3>
          <h3>Longitude: {Longitudeeighteen}</h3>
          <h3>Magnitude: {Magnitudeeighteen}</h3>
          <h3>Depth: {Deptheighteen} km</h3>
          <h3>Far Away To: {Farawayeighteen} km</h3>
        </EntityDescription>
      </Entity>
      <Entity
        name={Namenineteen}
        position={Cartesian3.fromDegrees(
          Longitudenineteen,
          Latitudenineteen,
          100
        )}
      >
          <BillboardGraphics image={quakeicon} scale={0.02*Risknineteen} ></BillboardGraphics>
        {/* <PointGraphics
          pixelSize={Risknineteen * 10}
          color={Color.RED}
          outlineColor={Color.WHITE}
          outlineWidth={2}
        ></PointGraphics> */}
        <EntityDescription>
          <style>{`
            .livetext {
              color: red;
            }
            .seperator{
              color:red;
            }
            `}</style>
          <h2>{Namenineteen}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="livetext">Live Data</h3>
          <h3>Time: {Timenineteen}</h3>
          <h3>Latitude: {Latitudenineteen}</h3>
          <h3>Longitude: {Longitudenineteen}</h3>
          <h3>Magnitude: {Magnitudenineteen}</h3>
          <h3>Depth: {Depthnineteen} km</h3>
          <h3>Far Away To: {Farawaynineteen} km</h3>
        </EntityDescription>
      </Entity>
      <Entity
        name={Nametwenty}
        position={Cartesian3.fromDegrees(Longitudetwenty, Latitudetwenty, 100)}
      >
          <BillboardGraphics image={quakeicon} scale={0.02*Risktwenty} ></BillboardGraphics>
        {/* <PointGraphics
          pixelSize={Risktwenty * 10}
          color={Color.RED}
          outlineColor={Color.WHITE}
          outlineWidth={2}
        ></PointGraphics> */}
        <EntityDescription>
          <style>{`
            .livetext {
              color: red;
            }
            .seperator{
              color:red;
            }
            `}</style>
          <h2>{Nameten}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="livetext">Live Data</h3>
          <h3>Time: {Timetwenty}</h3>
          <h3>Latitude: {Latitudetwenty}</h3>
          <h3>Longitude: {Longitudetwenty}</h3>
          <h3>Magnitude: {Magnitudetwenty}</h3>
          <h3>Depth: {Depthtwenty} km</h3>
          <h3>Far Away To: {Farawaytwenty} km</h3>
        </EntityDescription>
      </Entity>
    </Viewer>
  );
}

export default App;
