# Copy as Code Block for VSCode

This VSCode extension allows you to copy selected text in the editor as a code block to the clipboard.

The selected text is wrapped in a code block with a relative path to the file within the workspace.

It's useful for creating prompts for AI generation, making it convenient to paste code blocks.

## Main Features

- Retrieve selected text from the editor.
- Wrap the text in a code block with a relative path to its file within the workspace.
- Copy the wrapped text to the clipboard.

## Installation

1. Open Visual Studio Code.
2. Open the Extensions view.
3. Search for "Copy as Code Block" and install.
4. Reload to activate the extension.

## How to Use

1. Select text in the editor.
2. Press ⌘+C (or Ctrl+C) twice in succession.
3. Paste anywhere, and the selected text will be pasted as a code block.

## Example

1. Press ⌘+C (or Ctrl+C) twice in succession to copy to the clipboard.

2. When you paste the copied text, it will appear as follows:

```````
```src/sample.ts
console.log("Hello World!");
```
```````

このVSCode拡張機能は、エディタで選択したテキストをコードブロックとしてクリップボードにコピーするためのものです。

選択したテキストは、ワークスペース内のファイルの相対パスを持つコードブロックでラップされます。

生成AI用のプロンプトを作成する際に、コードブロックを貼り付けるのに便利です。

## 主な機能

- エディタで選択したテキストを取得
- テキストを、そのファイルのワークスペースに対する相対パスを持つコードブロックでラップ
- ラップされたテキストをクリップボードにコピー

## インストール方法

1. Visual Studio Codeを開く
2. 拡張機能ビューを開く
3. "Copy as Code Block"を検索し、インストールする
4. 再読み込みして拡張機能をアクティベートする

## 使い方

1. エディタ内でテキストを選択する
2. ⌘+C (またはCtrl+C) を2回連続で押す
3. 任意の場所にペーストすることで、選択したテキストがコードブロックとして貼り付けられる

## 例

1. ⌘+C (またはCtrl+C) を2回連続で押すとクリップボードにコピーされます。

2. コピーしたテキストを貼り付けると、以下のようになります。

```````
```src/sample.ts
console.log("Hello World!");
```
```````

## ライセンス

MIT
