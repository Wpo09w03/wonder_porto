export default function WonderWebsite() {
  const projects = [
    {
      title: "Fifth Light",
      description: "A powerful, dramatic cinematic cue with evolving textures.",
      audio: "/Fifth Light (1).mp3"
    },
    {
      title: "Crunch Time",
      description: "High-stakes tension theme, engineered for intense gameplay finales.",
      audio: "/Crunch Time - Final 30 seconds (1).wav"
    },
    {
      title: "Silver Lining",
      description: "A bright, hopeful piece with energetic rhythms and subtle depth.",
      audio: "/Silver Lining (3).mp3"
    },
    {
      title: "Sixty Four",
      description: "Retro synth vibes meet modern production in this chiptune evolution.",
      audio: "/SixtyFour 2 (2).mp3"
    },
    {
      title: "Drizzy's Code",
      description: "Edgy and urban-inspired, merging trap and cinematic flair.",
      audio: "/Soundtrack DRIZZY (1) (1).mp3"
    },
    {
      title: "Tropical Pressure",
      description: "An intense blend of world rhythms and digital textures.",
      audio: "/Tropical (1).mp3"
    },
    {
      title: "Squid Protocol",
      description: "A suspense-driven remix inspired by the Squid Game universe.",
      audio: "/Squid Game_2 (2).mp3"
    },
    {
      title: "Eloquence",
      description: "Elegant melodic structure for narrative-driven storytelling.",
      audio: "/Eloquence (3).mp3"
    },
    {
      title: "Forest Realms",
      description: "Ambient forest-themed score — immersive and atmospheric.",
      audio: "/Forest.wav"
    }
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial', background: '#000', color: '#fff' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>WONDER</h1>
      <p style={{ color: '#aaa', marginBottom: '2rem' }}>Game Sound Designer | Audio for RoFive</p>

      {projects.map((project, index) => (
        <div key={index} style={{ marginBottom: '2rem', borderBottom: '1px solid #333', paddingBottom: '1rem' }}>
          <h2>{project.title}</h2>
          <p style={{ color: '#ccc' }}>{project.description}</p>
          <audio controls style={{ width: '100%' }}>
            <source src={project.audio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
    </div>
  );
}