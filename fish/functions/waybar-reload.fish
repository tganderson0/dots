function waybar-reload --wraps='killall -SIGUSR2 waybar' --description 'alias waybar-reload=killall -SIGUSR2 waybar'
  killall -SIGUSR2 waybar $argv
        
end
