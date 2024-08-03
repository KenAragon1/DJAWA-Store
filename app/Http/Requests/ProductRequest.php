<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->user_type === "Admin";
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        if ($this->isMethod('post')) {
            return [
                'name' => 'required|string|max:255',
                'price' => 'required|integer|max:100000000',
                'stock' => 'required|integer|max:1000',
                'id_category' => 'required|integer',
                'brand' => 'required|string',
                'weight' => 'required|integer',
                'description' => 'required',
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg',
            ];
        } else {
            return [
                'name' => 'required|string|max:255',
                'price' => 'required|integer|max:100000000',
                'stock' => 'required|integer|max:1000',
                'id_category' => 'required|integer',
                'brand' => 'required|string',
                'weight' => 'required|integer',
                'description' => 'required',
                'image' => 'image|mimes:jpeg,png,jpg,gif,svg'
            ];
        }
    }
}
