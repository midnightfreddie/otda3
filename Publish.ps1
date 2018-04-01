$NextVer = (
    & aws s3 ls s3://midnightfreddie-public-static-files/otda3.com/alpha/ |
        ForEach-Object {
            if ($_ -match 'PRE (?<ver>\d+)/') {
                $Matches['ver']
            }
        } |
        Measure-Object -Maximum
).Maximum + 1

$DeployUrl = "/alpha/$NextVer"

ng build --prod --build-optimizer --deploy-url="$DeployUrl"

aws s3 sync $PSScriptRoot\dist\ s3://midnightfreddie-public-static-files/otda3.com$DeployUrl

"Deployed to https://www.otda3.com$DeployUrl"
