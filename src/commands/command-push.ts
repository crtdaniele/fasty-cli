import { exec } from "child_process";

/**
 * This function permit to push your code directly into Git
 * @param  {[string]} nameBranch the name of the branch that you want
 * @param  {[string]} commitMsg the commit message
 */
export const pushCode = (nameBranch: string, commitMsg: string): void => {
  exec(`git checkout -b ${nameBranch}`, () => {
    console.log("Git checkout: 🆗");

    exec("git add .", () => {
      console.log("Git add: 🆗");

      exec(`git commit -m '${commitMsg}'`, () => {
        console.log("Git commit: 🆗");

        exec(`git push --set-upstream origin ${nameBranch}`, () => {
          console.log("Git push: 🆗");
        });
      });
    });
  });
};
