import * as vscode from 'vscode';

let currentWebviewPanel: vscode.WebviewPanel | undefined = undefined;

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.copyAndPaste', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        const file_path = editor?.document?.fileName || "";
        console.log(file_path);
        const selection = editor.selection;
        const selectedText = editor.document.getText(selection);
        const text = "```" + file_path + "\n" + selectedText + "\n```";
        console.log(text);

        if (currentWebviewPanel) {
            // Append the new text to the existing webview content
            currentWebviewPanel.webview.html += `<pre>${text}</pre>`;
        } else {
            // Create and show a new webview panel
            currentWebviewPanel = vscode.window.createWebviewPanel(
                'selectedTextWebview',
                'Selected Text',
                vscode.ViewColumn.One,
                {}
            );
            currentWebviewPanel.webview.html = `<pre>${text}</pre>`;

            // Reset the currentWebviewPanel variable when the panel is disposed
            currentWebviewPanel.onDidDispose(() => {
                currentWebviewPanel = undefined;
            });
        }

    });

    context.subscriptions.push(disposable);
}

export function deactivate() { }
