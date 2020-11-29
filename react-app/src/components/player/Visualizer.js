// import { useRef, useEffect } from 'react'

// const Visualizer = ( { audioElement }) => {
//   const ref = useRef()

//   useEffect(() => {
//     var svg = d3.select(ref.current).append('svg')
//     .attr('width', w)
//     .attr('height', h);
//   }, [])

//   var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
//   var audioElement = document.getElementById('audioElement');
//   var audioSrc = audioCtx.createMediaElementSource(audioElement);
//   var analyser = audioCtx.createAnalyser();

//   // bind analyser to the media element source.
//   audioSrc.connect(analyser);
//   audioSrc.connect(audioCtx.destination);

//   var bufferSize = analyser.frequencyBinCount
//   //console.log(bufferSize);

//   //var frequencyData = new Uint8Array(200);
//   var frequencyData = new Uint8Array(bufferSize);

//   analyser.getByteFrequencyData(frequencyData);
//   var h = window.innerHeight - 100,
//       w = window.innerWidth-10;

//   var colorScale = d3.scaleLinear()
//     .domain([0, 150])
//     .range(["#2c7bb6","#d7191c"]);

//   var circleX = d3.scaleLinear()
//     .domain([0, frequencyData.length])
//     .range([0, w]);

//     var dots = svg.selectAll('circle')
//     .data(frequencyData)
//     .enter().append('circle')
//     .attr('r', function(d) { return w/frequencyData.length/2 +.3; })
//     .attr('cx', function(d, i) { return circleX(i); })
//     .attr('cy', function(d) { return h/2 - d; })
//     .attr('fill', function(d, i) { return colorScale(d); });

//   function drawChart() {

//     requestAnimationFrame(drawChart);

//     analyser.getByteFrequencyData(frequencyData);

//     svg.selectAll('circle')
//       .data(frequencyData)
//       .attr('cy', function(d) { return h/2 - d; })
//       .attr('fill', function(d, i) { return colorScale(d); });

//   };

//   drawChart();


//   return (
//     <svg
//       ref={ref}
//     />
//   )
// }

// export default Visualizer
