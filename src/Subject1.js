import React, {useRef} from "react";
import "./Subject1.css";
import udio1 from './assets/PeriodicTitleS.mp3'
import udio2 from './assets/PeriodicA.mp3'

function Subject1() {
  const subject1_title =  useRef(null)
  const subject1_topic =  useRef(null)
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
  console.log("Subject")
  return (
    <div className="subject1">
      <div className="subject1_title" ref={subject1_title} onMouseEnter={() => speak1()} onMouseLeave={() => dontspeak1()}>Periodic Table:</div>
      <div className="subject1_topic" ref={subject1_topic} onMouseEnter={() => speak2()} onMouseLeave={() => dontspeak2()} >
        The periodic table, also known as the periodic table of elements, is a
        tabular display of the chemical elements, which are arranged by atomic
        number, electron configuration, and recurring chemical properties. The
        structure of the table shows periodic trends. The seven rows of the
        table, called periods, generally have metals on the left and nonmetals
        on the right. The columns, called groups, contain elements with similar
        chemical behaviours. Six groups have accepted names as well as assigned
        numbers: for example, group 17 elements are the halogens; and group 18
        are the noble gases. Also displayed are four simple rectangular areas or
        blocks associated with the filling of different atomic orbitals. The
        elements from atomic numbers 1 (hydrogen) through 118 (oganesson) have
        all been discovered or synthesized, completing seven full rows of the
        periodic table. The first 94 elements, hydrogen through plutonium, all
        occur naturally, though some are found only in trace amounts and a few
        were discovered in nature only after having first been synthesized.
        Elements 95 to 118 have only been synthesized in laboratories, nuclear
        reactors, or nuclear explosions. The synthesis of elements having higher
        atomic numbers is currently being pursued: these elements would begin an
        eighth row, and theoretical work has been done to suggest possible
        candidates for this extension. Numerous synthetic radioisotopes of
        naturally occurring elements have also been produced in laboratories.
        The organization of the periodic table can be used to derive
        relationships between the various element properties, and also to
        predict chemical properties and behaviours of undiscovered or newly
        synthesized elements. Russian chemist Dmitri Mendeleev published the
        first recognizable periodic table in 1869, developed mainly to
        illustrate periodic trends of the then-known elements. He also predicted
        some properties of unidentified elements that were expected to fill gaps
        within the table. Most of his forecasts soon proved to be correct,
        culminating with the discovery of gallium and germanium in 1875 and 1886
        respectively, which corroborated his predictions. Mendeleev's idea has
        been slowly expanded and refined with the discovery or synthesis of
        further new elements and the development of new theoretical models to
        explain chemical behaviour. The modern periodic table now provides a
        useful framework for analyzing chemical reactions, and continues to be
        widely used in chemistry, nuclear physics and other sciences. Some
        discussion remains ongoing regarding the placement and categorisation of
        specific elements, the future extension and limits of the table, and
        whether there is an optimal form of the table. Each chemical element has
        a unique atomic number (Z) representing the number of protons in its
        nucleus. Most elements have differing numbers of neutrons among
        different atoms, with these variants being referred to as isotopes. For
        example, carbon has three naturally occurring isotopes: all of its atoms
        have six protons and most have six neutrons as well, but about one per
        cent have seven neutrons, and a very small fraction have eight neutrons.
        Isotopes are never separated in the periodic table; they are always
        grouped together under a single element. Elements with no stable
        isotopes have the atomic masses of their most stable isotopes, where
        such masses are shown, listed in parentheses. In the standard periodic
        table, the elements are listed in order of increasing atomic number Z. A
        new row (period) is started when a new electron shell has its first
        electron. Columns (groups) are determined by the electron configuration
        of the atom; elements with the same number of electrons in a particular
        subshell fall into the same columns (e.g. oxygen and selenium are in the
        same column because they both have four electrons in the outermost
        p-subshell). Elements with similar chemical properties generally fall
        into the same group in the periodic table, although in the f-block, and
        to some respect in the d-block, the elements in the same period tend to
        have similar properties, as well. Thus, it is relatively easy to predict
        the chemical properties of an element if one knows the properties of the
        elements around it.
      </div>
    </div>
  );
}

export default Subject1;
