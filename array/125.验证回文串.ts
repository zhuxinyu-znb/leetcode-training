/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  let l: number = 0;
  let r: number = s.length - 1;
  const reg = /[a-zA-Z0-9]/;
  while (l < r) {
    if (!reg.test(s[l])) {
      l++;
    } else if (!reg.test(s[r])) {
      r--;
    } else if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    } else {
      l++;
      r--;
    }
  }
  return true;
}
// @lc code=end
