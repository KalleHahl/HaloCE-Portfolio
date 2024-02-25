import muvico from "@/public/projectphotos/muvico.jpeg"
import tetris from "@/public/projectphotos/tetris.png"
import shunting from "@/public/projectphotos/shunting.jpg"
import bibtex from "@/public/projectphotos/bibtex.png"
import halo1 from "@/public/projectphotos/halo1.jpg"

import easy from "@/public/difficulties/easy.png"
import normal from "@/public/difficulties/normal.png"
import heroic from "@/public/difficulties/heroic.png"
import legendary from "@/public/difficulties/legendary.png"

export const projects = [
  {
    title: "Tetris",
    description: "Desktop application of the classic game Tetris",
    image: tetris,
    technologies: "Python, Pygame, Pytest, Poetry",
    url: "https://github.com/KalleHahl/TETRIS",
    difficulty: heroic,
  },
  {
    title: "Algorithmic Calculator",
    description:
      "Command line application that evaluates mathematical expressions using the shunting yard algorithm",
    image: shunting,
    technologies: "Python, Pytest, Poetry",
    url: "https://github.com/KalleHahl/Shunting-Yard-Calculator",
    difficulty: normal,
  },
  {
    title: "MuViCo",
    description: "Music visualization for concerts",
    image: muvico,
    technologies: "React, Node.js, Express, MongoDB, Docker",
    url: "https://github.com/MuViCo/MuViCo",
    difficulty: legendary,
  },
  {
    title: "BibTex cite controller",
    description: "Command line application that manages BibTex citations",
    image: bibtex,
    technologies: "Python, Pytest, Poetry, Robot Framework",
    url: "https://github.com/helinal/ohtu-miniprojekti",
    difficulty: easy,
  },
  {
    title: "Halo CE -Portfolio",
    description:
      "Portfolio website created in the spirit of the game Halo: Combat Evolved",
    image: halo1,
    technologies: "React, Next.js, Tailwind CSS, Framer Motion, Vercel",
    url: "https://github.com/KalleHahl/HaloCE-Portfolio",
    difficulty: legendary,
  },
]
