import path = require('path');
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.copyAsCodeBlock', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const fullPath = editor.document.uri.fsPath;
        let relativePath = fullPath;

        // Check if there's an open workspace
        if (vscode.workspace.workspaceFolders?.length) {
            const workspaceRoot = vscode.workspace.workspaceFolders[0].uri.fsPath;
            relativePath = path.relative(workspaceRoot, fullPath);
        }

        const selection = editor.selection;
        const selectedText = editor.document.getText(selection);
        const text = "```" + relativePath + "\n" + selectedText + "\n```";
        console.log(text);
        // copy to clipboard
        vscode.env.clipboard.writeText(text);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() { }

