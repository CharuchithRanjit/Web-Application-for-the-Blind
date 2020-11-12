import React, {useRef} from "react";
import "./Subject3.css";
import udio1 from './assets/DensityTitleS.mp3'
import udio2 from './assets/DensityA.mp3'

function Subject3() {
  const subject3_title =  useRef(null)
  const subject3_topic =  useRef(null)
  const audio1 = new Audio(udio1);
  const audio2 = new Audio(udio2);
   const speak1 = () => {
    audio1.play();
  }
  const dontspeak1 = () => {
    audio1.pause();
  }
  const speak2 = () => {
    audio2.play();
  }
  const dontspeak2 = () => {
    audio2.pause();
  }
  return (
    <div className="subject3">
      <div className="subject3_title" ref={subject3_title} onMouseEnter={() => speak1()} onMouseLeave={() => dontspeak1()}>Density:</div>
      <div className="subject3_topic" ref={subject3_topic} onMouseEnter={() => speak2()} onMouseLeave={() => dontspeak2()}>
        The density (more precisely, the volumetric mass density; also known as
        specific mass), of a substance is its mass per unit volume. The symbol
        most often used for density is ρ (the lower case Greek letter rho),
        although the Latin letter D can also be used. Mathematically, density is
        defined as mass divided by volume. In some cases (for instance, in the
        United States oil and gas industry), density is loosely defined as its
        weight per unit volume, although this is scientifically inaccurate –
        this quantity is more specifically called specific weight. For a pure
        substance the density has the same numerical value as its mass
        concentration. Different materials usually have different densities, and
        density may be relevant to buoyancy, purity and packaging. Osmium and
        iridium are the densest known elements at standard conditions for
        temperature and pressure. To simplify comparisons of density across
        different systems of units, it is sometimes replaced by the
        dimensionless quantity "relative density" or "specific gravity", i.e.
        the ratio of the density of the material to that of a standard material,
        usually water. Thus a relative density less than one means that the
        substance floats in water. The density of a material varies with
        temperature and pressure. This variation is typically small for solids
        and liquids but much greater for gases. Increasing the pressure on an
        object decreases the volume of the object and thus increases its
        density. Increasing the temperature of a substance (with a few
        exceptions) decreases its density by increasing its volume. In most
        materials, heating the bottom of a fluid results in convection of the
        heat from the bottom to the top, due to the decrease in the density of
        the heated fluid. This causes it to rise relative to more dense unheated
        material. The reciprocal of the density of a substance is occasionally
        called its specific volume, a term sometimes used in thermodynamics.
        Density is an intensive property in that increasing the amount of a
        substance does not increase its density; rather it increases its mass. A
        number of techniques as well as standards exist for the measurement of
        density of materials. Such techniques include the use of a hydrometer (a
        buoyancy method for liquids), Hydrostatic balance (a buoyancy method for
        liquids and solids), immersed body method (a buoyancy method for
        liquids), pycnometer (liquids and solids), air comparison pycnometer
        (solids), oscillating densitometer (liquids), as well as pour and tap
        (solids). However, each individual method or technique measures
        different types of density (e.g. bulk density, skeletal density, etc.),
        and therefore it is necessary to have an understanding of the type of
        density being measured as well as the type of material in question. In
        general, density can be changed by changing either the pressure or the
        temperature. Increasing the pressure always increases the density of a
        material. Increasing the temperature generally decreases the density,
        but there are notable exceptions to this generalization. For example,
        the density of water increases between its melting point at 0 °C and 4
        °C; similar behavior is observed in silicon at low temperatures. The
        effect of pressure and temperature on the densities of liquids and
        solids is small. The compressibility for a typical liquid or solid is
        10−6 bar−1 (1 bar = 0.1 MPa) and a typical thermal expansivity is 10−5
        K−1. This roughly translates into needing around ten thousand times
        atmospheric pressure to reduce the volume of a substance by one percent.
        (Although the pressures needed may be around a thousand times smaller
        for sandy soil and some clays.) A one percent expansion of volume
        typically requires a temperature increase on the order of thousands of
        degrees Celsius.
      </div>
    </div>
  );
}

export default Subject3;
