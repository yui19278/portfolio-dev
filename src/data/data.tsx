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
  SiCplusplusbuilder,
  SiGooglecloud,
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
import {useState} from "react";
//使えないアイコン用

export interface Skill {
  name: string
  icon: JSX.Element
  comment?: string
}


export const skills: Record<string, Skill[]> = {
  backend: [
    { name: 'Scala',  icon: <SiScala /> ,           comment:
            '高 2 のとき夢中になったマイクラ鯖が, 学生が Scala で開発した OSS だったことが, 私のプログラマ人生の原点です',  },
    { name: 'Java',   icon: <FaJava />,             comment: 'はじめて触ったバックエンド言語です'},
    { name: 'Kotlin', icon: <SiKotlin />,           comment: 'インターンでLine風メモ帳アプリを作成する際に使用しました' },
    { name: 'Python', icon: <SiPython />,           comment: 'Discord bot を開発する際に使っています'   },
    { name: 'Csharp', icon: <TbBrandCSharp />,      comment: '大学 3 年で VR にのめり込み、再び使うようになりました'  },
    {name: 'C++',     icon: <SiCplusplusbuilder />, comment: '競プロの勉強, 講習会に使用しています' },
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
    { name: 'Lisp', icon: <CiSquareRemove/>,        comment: 'Common Lisp 派です' },
  ],
  frontend: [
    { name: 'Astro',      icon: <SiAstro /> ,       comment: 'このサイトのフロントエンドに使用しています' },
    { name: 'JavaScript', icon: <SiJavascript />,   comment: '私の Twitter ハンドルネームの由来になった言語です' },
    { name: 'TypeScript', icon: <SiTypescript />,   comment: '型安全が正義' },
    { name: 'React',      icon: <FaReact />,        comment: '研究室での開発に採用しました, このサイトでも使用しています'       },
    { name: 'Vue.js',     icon: <FaVuejs  />,       comment: 'アルバイトで初めて使いました. 実務経験は 6 か月ほどです'    },
  ],
  infrastructure: [
    { name: 'Docker',     icon: <FaDocker />,       comment: '高校時代にマイクラ鯖を調べていて出会いました'    },
    { name: 'Kubernetes', icon: <SiKubernetes />,   comment: '自宅に Raspberry Pi クラスタがあります'  },
    { name: 'AWS',        icon: <FaAws />,          comment: 'インターンで利用しました'         },
    { name: 'GKE',        icon: <SiGooglecloud />,  comment: '無料枠が手厚いのでうれしいです',
      },
    { name: 'Proxmox',    icon: <SiProxmox />,      comment: 'マイクラ鯖のホストに使用しています'     },
    { name: 'VMware',     icon: <GrVmware />,       comment: '研究室Kubernetesで利用しています'         },
    { name: 'Heroku',     icon: <SiHeroku />,       comment: '無料プランの時代に出会い, Discord bot をホストしました'   },
  ],
  databases: [
    { name: 'MySQL',      icon: <SiMysql />,        comment: 'インターンや趣味開発で使用' },
    { name: 'SQLite',     icon: <SiSqlite />,       comment: 'インターンでLine風メモ帳アプリを作成する際に使用しました' },
    { name: 'Redis',      icon: <SiRedis />,        comment: 'インターンで使用. 今後は趣味開発にも使いたいです' },
  ],
  tools: [
    { name: 'GitHub',     icon: <SiGithub />,       comment: 'コミットぐちゃぐちゃになりがち' },
    { name: 'GitLab',     icon: <SiGitlab />,       comment: 'アルバイトで使用' },
    { name: 'esa',        icon: <CiSquareRemove/>,  comment: 'アルバイトで使用  スターを付ける ☆'}, //https://docs.esa.io/posts/125 で決められている パス
    { name: 'Confluence', icon: <SiConfluence />,   comment: 'インターンで読み漁りました' },
    { name: 'Jira',       icon: <SiJira />,         comment: 'インターンで使用'       },
    { name: 'Redmine',    icon: <SiRedmine /> ,     comment: 'アルバイトや趣味開発で使用'  },
    { name: 'ClickUp',    icon: <SiClickup /> ,     comment: 'アルバイトで使用. デザインがおしゃれですよね' },
    { name: 'Obsidian',   icon: <SiObsidian /> ,    comment: '日々のメモ帳. これを使い始める前は VS Code でメモを書いていました'},
    { name: 'Slack',      icon: <SiSlack /> ,       comment: 'おすすめのチャンネルがあれば教えてください !'  },
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


export const SkillCard = ({ skill }: { skill: Skill }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative flex flex-col items-center justify-center p-4 w-32 h-32 sm:w-36 sm:h-36 bg-white dark:bg-gray-800 rounded-2xl shadow-md transition-all duration-300 ease-in-out cursor-pointer overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`flex flex-col items-center justify-center transition-opacity duration-300 ${isHovered && skill.comment ? 'opacity-0' : 'opacity-100'}`}>
                <div className="text-4xl sm:text-5xl text-gray-700 dark:text-gray-300 mb-2">{skill.icon}</div>
                <p className="font-semibold text-center text-gray-800 dark:text-gray-200">{skill.name}</p>
            </div>

            {skill.comment && (
                <div
                    className={`absolute inset-0 flex items-center justify-center p-3 bg-gray-800 bg-opacity-90 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                >
                    <p className="text-xs text-center text-white">
                        {skill.comment}
                    </p>
                </div>
            )}
        </div>
    );
};
