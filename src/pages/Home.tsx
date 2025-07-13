import { css } from "../../styled-system/css";
import React from "react";
import { Link } from '@tanstack/react-router';

export const HomePage: React.FC = () => {
  console.log("home");
  return (
    <div
      className={css({
        backgroundColor: "gray.50",
        minHeight: "100vh",
        paddingY: "10",
        paddingX: "6",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10",
      })}
    >
      {/* Hero */}
      <section className={css({ maxWidth: "3xl", textAlign: "center" })}>
        <h1 className={css({ fontSize: "4xl", fontWeight: "bold", marginBottom: "4", color: "gray.800" })}>
          いつもそばにいてくれた、あの子へ
        </h1>
        <p className={css({ fontSize: "md", color: "gray.600", lineHeight: "1.8" })}>
          ペットは、家族であり、親友であり、心の支えでした。<br />
          彼らは言葉を話さなくても、私たちの心に寄り添い、無償の愛をくれました。<br />
          この場所は、そんなあなたの気持ちを「分かっているよ」とそっと伝える場所です。
        </p>
      </section>

      {/* 悲しみの声 */}
      <section className={css({ maxWidth: "3xl", width: "100%" })}>
        <h2 className={css({ fontSize: "2xl", fontWeight: "bold", marginBottom: "6", color: "gray.700" })}>
          悲しみの声
        </h2>
        {[
          { path: "/blog/no1", title: "17歳の老犬を看取った日", text: "うちの子は柴犬の「まる」。..." },
          { path: "/blog/no2", title: "大切な13歳の猫、ミミ", text: "ミミは甘えん坊で..." },
          { path: "/blog/no3", title: "鳥かごの中の家族、ピーちゃん", text: "セキセイインコのピーちゃん..." },
          { path: "/blog/no4", title: "ハムスターの命も、同じ重さ", text: "小さな命だけど..." },
          { path: "/blog/no5", title: "一緒に育ったウサギのチロ", text: "小学生の頃に迎えたチロ..." },
        ].map((item) => (
          <Link key={item.path} to={item.path} className={css({ textDecoration: "none" })}>
            <article className={css({ backgroundColor: "white", borderRadius: "xl", boxShadow: "md", padding: "6", marginBottom: "4", transition: "all 0.2s", _hover: { boxShadow: "xl", backgroundColor: "gray.50" } })}>
              <h3 className={css({ fontSize: "xl", fontWeight: "semibold", marginBottom: "2", color: "gray.800" })}>
                {item.title}
              </h3>
              <p className={css({ color: "gray.600", lineHeight: "1.8" })}>{item.text}</p>
            </article>
          </Link>
        ))}
      </section>

      {/* 言葉の贈り物 */}
      <section className={css({ maxWidth: "3xl", width: "100%", paddingTop: "12" })}>
        <h2 className={css({ fontSize: "2xl", fontWeight: "bold", marginBottom: "6", color: "gray.700" })}>
          ことばの贈り物
        </h2>

        <div className={css({ display: "grid", gap: "6" })}>
          {/* ブッダの教え */}
          <blockquote
            className={css({
              backgroundColor: "white",
              borderLeft: "4px solid",
              borderColor: "gray.400",
              padding: "5",
              borderRadius: "lg",
              boxShadow: "sm",
            })}
          >
            <p className={css({ fontStyle: "italic", color: "gray.600", lineHeight: "1.7" })}>
              「すべての生きとし生けるものが、幸せでありますように。」<br />
              — 仏教の慈悲の教えより（共に生き、共に逝く “共生” の思想）
            </p>
          </blockquote>

          {/* 世界の言葉 */}
          <blockquote
            className={css({
              backgroundColor: "white",
              borderLeft: "4px solid",
              borderColor: "gray.400",
              padding: "5",
              borderRadius: "lg",
              boxShadow: "sm",
            })}
          >
            <p className={css({ fontStyle: "italic", color: "gray.600", lineHeight: "1.7" })}>
              “To live in hearts we leave behind is not to die.”<br />
              — Thomas Campbell（スコットランドの詩人）
            </p>
          </blockquote>

          {/* 偉人の言葉 */}
          <blockquote
            className={css({
              backgroundColor: "white",
              borderLeft: "4px solid",
              borderColor: "gray.400",
              padding: "5",
              borderRadius: "lg",
              boxShadow: "sm",
            })}
          >
            <p className={css({ fontStyle: "italic", color: "gray.600", lineHeight: "1.7" })}>
              「本当に大切なものは、目に見えないんだよ。」<br />
              — サン＝テグジュペリ『星の王子さま』
            </p>
          </blockquote>
        </div>
      </section>
        {/* 心の支えになるものたち */}
      <section className={css({ maxWidth: "3xl", width: "100%", paddingTop: "12" })}>
        <h2 className={css({ fontSize: "2xl", fontWeight: "bold", marginBottom: "6", color: "gray.700" })}>
            心の支えになるものたち
        </h2>

        <div className={css({ display: "grid", gap: "6" })}>
            {/* アプリ紹介 */}
            <div
            className={css({
                backgroundColor: "white",
                padding: "6",
                borderRadius: "xl",
                boxShadow: "md",
            })}
            >
            <h3 className={css({ fontSize: "xl", fontWeight: "semibold", marginBottom: "2", color: "gray.800" })}>
                アプリで少しずつ気持ちを整える
            </h3>
            <ul className={css({ color: "gray.600", lineHeight: "1.8", paddingLeft: "4", listStyle: "disc" })}>
                <li><strong>Grief Support</strong>（英語）- グリーフケアに特化したサポートアプリ</li>
                <li><strong>ペットロス癒やし日記</strong> - あの子との思い出を記録</li>
                <li><strong>Day One</strong>, <strong>Jour</strong> - 毎日の気持ちを日記に綴る</li>
                <li><strong>Calm</strong>, <strong>Insight Timer</strong> - 瞑想で心の波を静める</li>
            </ul>
            </div>

            {/* その他の手段 */}
            <div
            className={css({
                backgroundColor: "white",
                padding: "6",
                borderRadius: "xl",
                boxShadow: "md",
            })}
            >
            <h3 className={css({ fontSize: "xl", fontWeight: "semibold", marginBottom: "2", color: "gray.800" })}>
                その他、乗り越えるためのやさしい方法
            </h3>
            <ul className={css({ color: "gray.600", lineHeight: "1.8", paddingLeft: "4", listStyle: "disc" })}>
                <li>フォトブックやアルバムを作って、思い出を形にする</li>
                <li>天国のペットへ手紙を書くことで、気持ちを整理する</li>
                <li>他の人の体験談を読んだり、話したりすることで孤独感が和らぐ</li>
                <li>散歩や軽い運動、新しい趣味に挑戦することで少しずつ日常を取り戻す</li>
            </ul>
            </div>
        </div>
      </section>
    </div>
  );
};
