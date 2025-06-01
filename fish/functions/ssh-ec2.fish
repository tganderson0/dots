function ssh-ec2 --wraps='ssh -i ~/.ssh/desktop.pem ec2-user@18.117.238.209' --description 'alias ssh-ec2=ssh -i ~/.ssh/desktop.pem ec2-user@18.117.238.209'
  ssh -i ~/.ssh/desktop.pem ec2-user@18.117.238.209 $argv
        
end
