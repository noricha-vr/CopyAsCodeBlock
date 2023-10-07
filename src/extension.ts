import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.copyAsCodeBlock', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const file_name = editor?.document?.fileName || "";
        const selection = editor.selection;
        const selectedText = editor.document.getText(selection);
        const text = "```" + file_name + "\n" + selectedText + "\n```";
        console.log(text);
        // copy to clipboard
        vscode.env.clipboard.writeText(text);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() { }
