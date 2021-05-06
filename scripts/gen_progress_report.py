from typing import List

import os
import requests

import arrow

def get_commits(repo_name: str, since: str) -> List:
  commits = requests.get(f'https://api.github.com/repos/{repo_name}/commits?since={since}').json()

  def parse_commit(commit):
    message = commit['commit']['message']
    if message.startswith('Merge pull request'):
      message = message.split('\n')[1:]
      message = '\n'.join(message)
      message = message.strip()

    return {
      'message': message,
      'url': commit['commit']['url'],
      'date': commit['commit']['committer']['date']
    }
  return list(map(parse_commit, commits))

def create_md(path: str, title: str, commits: List) -> str:
  title = f"# {title}"
  commits = [f"- [{commit['date']}]({commit['url']}): {commit['message']}" for commit in commits]
  contents = title + '\n\n' + '\n\n'.join(commits) 
  with open(path, mode='x') as f:
    f.writelines(contents)

if __name__ == '__main__':
  last_week = arrow.utcnow().shift(weeks=-1).isoformat().split('.')[0] + 'Z'
  desktop_commits = get_commits('actually-colab/desktop', since=last_week)
  create_md('test.md', 'Desktop Progress', desktop_commits)
  editor_commits = get_commits('actually-colab/editor', since=last_week)
