param([string]$Path)

Add-Type -TypeDefinition @"
using System;
using System.Runtime.InteropServices;
public class Wallpaper {
    [DllImport("user32.dll", CharSet = CharSet.Auto)]
    public static extern int SystemParametersInfo(int uAction, int uParam, string lpvParam, int fuWinIni);
    public static void Set(string path) {
        // 20 = SPI_SETDESKWALLPAPER, 3 = SPIF_UPDATEINIFILE | SPIF_SENDWININICHANGE
        SystemParametersInfo(20, 0, path, 3);
    }
}
"@

[Wallpaper]::Set($Path)
