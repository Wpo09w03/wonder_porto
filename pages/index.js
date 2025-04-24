import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function WonderWebsite() {
  return (
    <div className="min-h-screen bg-black text-white p-6 font-sans">
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold tracking-tight">WONDER</h1>
        <p className="text-lg mt-4 text-gray-400">Game Sound Designer | Audio for RoFive</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
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
        ].map((project, i) => (
          <Card key={i} className="bg-gray-900 border-none">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <audio controls className="w-full">
                <source src={project.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="text-center mt-16 border-t border-gray-800 pt-6">
        <p className="text-gray-500">Created by Lefinhio Leidsman · TikTok: <a href="https://tiktok.com/@skully445" className="text-blue-400 hover:underline">@skully445</a></p>
      </footer>
    </div>
  );
}
