import { FaAws, FaDocker, FaJava, FaReact, FaVuejs } from 'react-icons/fa';
import { GrVmware } from "react-icons/gr";
import {
  SiAstro,
  SiClickup,
  SiConfluence,
  SiGithub,
  SiGitlab,
  SiHeroku,
  SiJavascript,
  SiJira,
  SiKotlin,
  SiKubernetes,
  // SiLisp,
  SiMysql,
  SiObsidian,
  SiProxmox,
  SiPython,
  SiRedis,
  SiRedmine,
  SiScala,
  SiSlack,
  SiSqlite,
  SiTypescript
} from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";
// import LispLogo from '../assets/Lisplogo.png';

import { CiSquareRemove } from "react-icons/ci";
//使えないアイコン用

export interface Skill {
  name: string
  icon: JSX.Element
}


export const skills: Record<string, Skill[]> = {
  backend: [
    { name: 'Scala',  icon: <SiScala />   },
    { name: 'Java',   icon: <FaJava />    },
    { name: 'Kotlin', icon: <SiKotlin />  },
    { name: 'Python', icon: <SiPython />  },
    { name: 'Csharp', icon: <TbBrandCSharp />  },
    // {
    //   name: 'Lisp',
    //   icon: (
    //     <img
    //       src={LispLogo.src}
    //       alt="Lisp"
    //       width="16"    
    //       height="16"
    //     />
    //   ),
    // },
    // 何故か読みこまないので，後で修正
    { name: 'Lisp', icon: <CiSquareRemove/> },
  ],
  frontend: [
    { name: 'Astro',      icon: <SiAstro />      },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'React',      icon: <FaReact />       },
    { name: 'Vue.js',        icon: <FaVuejs  />    },
  ],
  infrastructure: [
    { name: 'Docker',     icon: <FaDocker />      },
    { name: 'Kubernetes', icon: <SiKubernetes />  },
    { name: 'AWS',        icon: <FaAws />         },
    { name: 'Proxmox',    icon: <SiProxmox />     },
    { name: 'VMware',     icon: <GrVmware />      },
    { name: 'Heroku',     icon: <SiHeroku />      },
  ],
  databases: [
    { name: 'MySQL',  icon: <SiMysql />  },
    { name: 'SQLite', icon: <SiSqlite /> },
    { name: 'Redis',  icon: <SiRedis />  },
  ],
  tools: [
    { name: 'GitHub',     icon: <SiGithub />    },
    { name: 'GitLab',     icon: <SiGitlab />    },
    { name: 'esa',        icon: <CiSquareRemove/>}, //https://docs.esa.io/posts/125 で決められている パス
    { name: 'Confluence', icon: <SiConfluence /> },
    { name: 'Jira',       icon: <SiJira />       },
    { name: 'Redmine',    icon: <SiRedmine />    },
    { name: 'ClickUp',    icon: <SiClickup />    },
    { name: 'Obsidian',   icon: <SiObsidian />   },
    { name: 'Slack',      icon: <SiSlack />      },
  ],
}

export const projects = [
    {
    title: "ポートフォリオサイト yui19278.github.io",
    description: "自分のスキルを整理するために開発中．フロントエンドをAstro, Reactで構築，バックエンドをScala, MySQL, Dockerで構築．",
    tags: ["Astro", "React", "TypeScript", "Scala", "MySQL", "Docker"],
    link: "https://github.com/yui19278/portfolio-dev",
    },
    {
    title: "株投資シミュレーションゲーム",
    description: "趣味のUnityとC#のアウトプットとして，C#, ASP.NETで株売買をするゲームを2人で作成．",
    tags: ["C#"],
    link: "https://github.com/yui19278/stock_game",
    },
    {
    title: "SNS風メモ帳アプリ",
    description: "インターンで開発したアプリ. Kotlin, Python, SQLiteで構築．",
    tags: ["Kotlin", "Python", "SQLite"],
    link: "https://github.com/yui19278/chatApp",
    },
    {
    title: "旅行bot たびまとめ",
    description: "友人と同時に旅行をする際に写真を共有するためのbot Discord.pyで開発．",
    tags: ["Python", "Discord"],
    link: "https://github.com/yui19278/tabibot",
    },
];