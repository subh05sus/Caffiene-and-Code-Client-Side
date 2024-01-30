import React, { useState, useEffect } from "react";
import "./ContributionLeaderboard.css"; // Add your CSS file for styling

async function getContributionsForUsersAndRepos(token, usernames, repoUrls) {
  console.log("function started");
  const contributions = {}; // Store contributions for each user and repo

  for (const repoUrl of repoUrls) {
    const owner = repoUrl.split("/")[3]; // Extract owner from repo URL
    const repoName = repoUrl.split("/")[4]; // Extract repo name from repo URL

    const body = {
      query: `query {
        repository(owner: "${owner}", name: "${repoName}") {
          owner {
            login
          }
          name
          defaultBranchRef {
            target {
              ... on Commit {
                history {
                  totalCount
                  nodes {
                    author {
                      user {
                        login
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }`,
    };

    const headers = {
      Authorization: `bearer ${token}`,
    };

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers,
    });

    const data = await response.json();

    if (data.errors) {
      console.error(`Error fetching data for ${repoUrl}:`, data.errors);
    } else {
      const repoContributors =
        data.data.repository.defaultBranchRef.target.history.nodes.map(
          (commit) => commit.author.user.login
        );
      console.log(repoContributors);
      repoContributors.forEach((repoContri) => {
        for (const username of usernames) {
          if (!contributions[username]) {
            contributions[username] = 0;
          }

          if (repoContri === username) {
            contributions[username] += 1;
          }
        }
      });
    }
  }

  console.log(contributions);
  localStorage.setItem("contributions", JSON.stringify(contributions));
  return contributions;
}

const ContributionLeaderboard = ({setProgress}) => {
  const [contributions, setContributions] = useState({});

  const usernames = [
    "subh05sus",
    "subinoybiswas",
    "Avdhesh-Varshney",
    "harmeetsingh11",
    "SanketShinde01",
  ];
  const repoUrls = [
    "https://github.com/subh05sus/GeetaGPT",
    "https://github.com/MenOfCultureSS0/DPBH",
  ];
  const githubToken = process.env.REACT_APP_GITHUB_TOKEN || "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const firstRun = localStorage.getItem("firstRun");
        const lastUpdated = localStorage.getItem("lastUpdated");
        const currentDate = new Date().toDateString();
        
        // Check if it's the first run or a new day
        if (!firstRun || lastUpdated !== currentDate) {
          setProgress(30)
          const storedContributions = localStorage.getItem("contributions");
          setProgress(60)
          if (storedContributions) {
            const parsedContributions = JSON.parse(storedContributions);
            setContributions(parsedContributions);
          } else {
            const data = await getContributionsForUsersAndRepos(
              githubToken,
              usernames,
              repoUrls
              );
              setContributions(data);
            }
            
            setProgress(100)
          // Update firstRun and lastUpdated in localStorage
          if (!firstRun) {
            localStorage.setItem("firstRun", true);
            console.log("first run done");
          }
          localStorage.setItem("lastUpdated", currentDate);
          console.log("updated on", currentDate);
        } else {
          console.log("Already updated, wait till 12 am to update");
        }
      } catch (error) {
        console.error("Error fetching contributions:", error);
      }
    };
    console.log(localStorage);
    fetchData();
  }, [githubToken, repoUrls, setProgress, usernames]); // Run once on component mount

  const getTotalContributions = (username) => {
    if (contributions[username]) {
      return Object.values(contributions[username]).reduce(
        (acc, count) => acc + (count || 0),
        0
      );
    }
    return 0;
  };

  // Extract the top 3 users
  const topThreeUsers = usernames.slice(0, 3);
  // Extract the remaining users (excluding the top 3)
  const remainingUsers = usernames.slice(3);

  return (
    <div className="contribution-leaderboard-container">
      <h2>Contribution Leaderboard</h2>
      <p>This will update every day at 12 am</p>
      {/* Top 3 users */}
      <div className="top-three">
        {topThreeUsers.map((username, index) => (
          <div key={index} className="user-card">
            <p>{username}</p>
            <p>Total Contributions: {getTotalContributions(username)}</p>
          </div>
        ))}
      </div>

      {/* Remaining users in a table */}
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Total Contributions</th>
          </tr>
        </thead>
        <tbody>
          {remainingUsers.map((username, index) => (
            <tr key={index}>
              <td>{username}</td>
              <td>{getTotalContributions(username)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContributionLeaderboard;
