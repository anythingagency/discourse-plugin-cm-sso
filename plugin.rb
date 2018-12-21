# name: CmSso
# about:
# version: 0.1
# authors: 
# url: https://github.com/


register_asset "stylesheets/common/cm-sso.scss"


enabled_site_setting :cm_sso_enabled

PLUGIN_NAME ||= "CmSso".freeze

after_initialize do
  
  # see lib/plugin/instance.rb for the methods available in this context
  

  module ::CmSso
    class Engine < ::Rails::Engine
      engine_name PLUGIN_NAME
      isolate_namespace CmSso
    end
  end

  

  
  require_dependency "application_controller"
  class CmSso::ActionsController < ::ApplicationController
    requires_plugin PLUGIN_NAME

    before_action :ensure_logged_in

    def list
      render json: success_json
    end
  end

  CmSso::Engine.routes.draw do
    get "/list" => "actions#list"
  end

  Discourse::Application.routes.append do
    mount ::CmSso::Engine, at: "/cm-sso"
  end
  
end
