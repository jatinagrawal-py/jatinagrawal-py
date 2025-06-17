import fetch from "node-fetch";
import fs from "fs";

async function fetchData() {
  try {
    console.log("🚀 Fetching latest stats...");
    
    // Fetch data from APIs
    const [leetcodeResponse, codeforcesResponse, cfSubmissionsResponse] = await Promise.all([
      fetch("https://leetcode-stats-api.herokuapp.com/jatin-agrawal").then(res => res.json()),
      fetch("https://codeforces.com/api/user.info?handles=jatinagrawal0987654321").then(res => res.json()),
      fetch("https://codeforces.com/api/user.status?handle=jatinagrawal0987654321&from=1&count=10000").then(res => res.json())
    ]);

    // Try to fetch GFG stats (unofficial scraping)
    let gfgStats = { solved: 0, score: 0 };
    try {
      const gfgResponse = await fetch("https://practiceapi.geeksforgeeks.org/api/latest/user-profile/jatinagrawalbybj/");
      if (gfgResponse.ok) {
        const gfgData = await gfgResponse.json();
        gfgStats = {
          solved: 119,
          score: 299
        };
      }
    } catch (e) {
      console.log("GFG API not available, using placeholder");
    }

    const leet = leetcodeResponse;
    const codeforces = codeforcesResponse;
    
    // Calculate Codeforces solved problems
    const cfSolved = cfSubmissionsResponse.status === 'OK' ? 
      new Set(cfSubmissionsResponse.result
        .filter(sub => sub.verdict === 'OK')
        .map(sub => sub.problem.contestId + sub.problem.index)
      ).size : 0;
    
    // Calculate acceptance rate
    const acceptanceRate = leet.totalSubmissions > 0 ? 
      Math.round((leet.totalSolved / leet.totalSubmissions) * 100) : 0;
    
    // Get current date
    const lastUpdated = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Kolkata'
    });

    const README = `<div align="center">

<h2> Hi, I'm Jatin Agrawal! <img src="https://media.giphy.com/media/mGcNjsfWAjY5AEZNw6/giphy.gif" width="50"></h2>
<p><em>I am a 3rd-year B.Tech student at <a href="https://www.mnit.ac.in/">NIT Jaipur</a><img src="https://media.giphy.com/media/fYSnHlufseco8Fh93Z/giphy.gif" width="30"></br>Pursuing<a 
href="#"> Artificial intelligence and Data engineering </a><img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="30"> 
</em></p>

### 🚀 Passionate Developer | Competitive Programmer | Problem Solver

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=00D4FF&center=true&vCenter=true&width=435&lines=Full+Stack+Developer;Competitive+Programmer;Always+Learning+New+Things;Problem+Solver" alt="Typing SVG" />

---

### 🌐 Connect with me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/jatin-agrawal-py)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jatinagrawal-py)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:jatinagrawal0987654321@gmail.com)

</div>

---

## 🏆 Competitive Programming Journey

<div align="center">

### 🌟 Current Stats Overview
![Profile Views](https://komarev.com/ghpvc/?username=jatinagrawal-py&color=blueviolet&style=flat-square)
![GitHub followers](https://img.shields.io/github/followers/jatinagrawal-py?style=social)

</div>

### 🔥 Platform Statistics

<table>
<tr>
<td width="33%">

#### 🟠 **Codeforces**
- **Handle:** \`${codeforces.result?.[0]?.handle || 'N/A'}\`
- **Rating:** \`${codeforces.result?.[0]?.rating || 'N/A'}\` 
- **Rank:** \`${codeforces.result?.[0]?.rank || 'N/A'}\`
- **Max Rating:** \`${codeforces.result?.[0]?.maxRating || 'N/A'}\`
- **Problems Solved:** \`${cfSolved}\`

</td>
<td width="33%">

#### 🟡 **LeetCode** 
- **Problems Solved:** \`${leet.totalSolved || 0}\`
- **Easy:** \`${leet.easySolved || 0}\` | **Medium:** \`${leet.mediumSolved || 0}\` | **Hard:** \`${leet.hardSolved || 0}\`
- **Global Ranking:** \`~${leet.ranking || 'N/A'}\`
- **Acceptance Rate:** \`70.31\`

</td>
<td width="33%">

#### 🟢 **GeeksforGeeks**
- **Username:** \`jatinagrawalbybj\`
- **Problems Solved:** \`${gfgStats.solved}\`
- **Total Score:** \`${gfgStats.score}\`
- **Profile:** [View Profile](https://auth.geeksforgeeks.org/user/jatinagrawalbybj)

</td>
</tr>
</table>

### 📊 Problem Solving Progress

<div align="center">

#### LeetCode Progress Bar
![Easy](https://img.shields.io/badge/Easy-${leet.easySolved || 0}-green)
![Medium](https://img.shields.io/badge/Medium-${leet.mediumSolved || 0}-orange)
![Hard](https://img.shields.io/badge/Hard-${leet.hardSolved || 0}-red)
</div>

---

## 💻 Tech Stack & Tools

<div align="center">

### Languages
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![C++](https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white)

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Backend & Database
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

### Tools & Platforms
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)

</div>

---

## 📈 GitHub Analytics

<div align="center">

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=jatinagrawal-py&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true&cache_seconds=86400)
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=jatinagrawal-py&layout=compact&theme=tokyonight&cache_seconds=86400)

![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=jatinagrawal-py&theme=tokyonight&cache_seconds=86400)

### 🏆 GitHub Trophies
![GitHub Trophies](https://github-profile-trophy.vercel.app/?username=jatinagrawal-py&theme=tokyonight&row=2&column=4&margin-w=15&margin-h=15&cache_seconds=86400)

### 📊 Contribution Graph
![Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=jatinagrawal-py&theme=tokyo-night&cache_seconds=86400)

</div>

---

## 🎯 Current Focus

- 🔭 Working on **Full Stack Web Development Projects**
- 🌱 Learning **Advanced Data Structures & Algorithms**
- 👯 Looking to collaborate on **Open Source Projects**
- 💬 Ask me about **Competitive Programming, Web Development**
- ⚡ Fun fact: **I debug with console.log() and I'm not ashamed! 😄**

---

## 📝 Latest Blog Posts & Articles

<!-- BLOG-POST-LIST:START -->
- Coming Soon...
<!-- BLOG-POST-LIST:END -->

---

## 🎵 Currently Vibing To

[![Spotify](https://spotify-now-playing-steel.vercel.app/api/spotify)](https://open.spotify.com/user/your-spotify-username)

---

<div align="center">

### 💡 Random Dev Quote
![Dev Quote](https://quotes-github-readme.vercel.app/api?type=horizontal&theme=tokyonight&cache_seconds=86400)

---

**⭐ From [jatinagrawal-py](https://github.com/jatinagrawal-py)**

*Last Updated: ${lastUpdated} IST*

</div>`;

    // Write to file
    fs.writeFileSync("README.md", README);
    console.log("✅ README.md updated successfully!");
    
  } catch (error) {
    console.error("❌ Error updating README:", error);
    process.exit(1);
  }
}

fetchData();
